import { config } from "dotenv";
import Express from "express";
import { useServer } from "graphql-ws/lib/use/ws";
import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "http";
import next from "next";
import { ExpressPeerServer } from "peer";
import { parse } from "url";
import { WebSocketServer } from "ws";
import { resolvers } from "./Graphql/Schema/resolvers.generated.js";
import { typeDefs } from "./Graphql/Schema/typeDefs.generated.js";
import { context } from "./YogaContext.js";

config();

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// prepare nextjs
const app = next({ dev, hostname, port });
// match the route next would use if yoga was in `pages/api/graphql.ts`
const graphqlEndpoint = process.env.GRAPHQL_PATH!;
// prepare yoga
const yoga = createYoga({
  graphqlEndpoint,
  graphiql: {
    subscriptionsProtocol: "WS",
  },
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context,
});
(async () => {
  await app.prepare();
  const handle = app.getRequestHandler();
  // create http server
  const expressApp = Express();
  expressApp.use(graphqlEndpoint, async (req, res, next) => {
    await yoga(req, res);
  });

  // create websocket server
  const server = createServer(expressApp);
  const peerServer = ExpressPeerServer(server, {
    //proxied: true,
    //path: "/myapp",
    alive_timeout: 30,
    host: new URL(process.env.DOMAIN!).host.split(":")[0],
    port: 3000
  });

  peerServer.on('connection',(client)=>{
    console.log(client.getId())
  })

  peerServer.on('error',(error)=>{
    console.log(error)
  })
  peerServer.on('message',(error)=>{
    console.log(error)
  })
  peerServer.addListener('connection', (e)=>{
    console.log(e)
  })

  expressApp.use(/\/peer+/, peerServer);
  expressApp.use(async (req, res, next) => {
    const url = parse(req.url!, true);
    await handle(req, res, url);
    //next()
  });
  const wsServer = new WebSocketServer({ server, path: graphqlEndpoint });
  // prepare graphql-ws
  useServer(
    {
      execute: (args: any) => args.rootValue.execute(args),
      subscribe: (args: any) => args.rootValue.subscribe(args),
      onSubscribe: async (ctx, msg) => {
        const { schema, execute, subscribe, contextFactory, parse, validate } =
          yoga.getEnveloped({
            ...ctx,
            req: ctx.extra.request,
            socket: ctx.extra.socket,
            params: msg.payload,
          });
        const args = {
          schema,
          operationName: msg.payload.operationName,
          document: parse(msg.payload.query),
          variableValues: msg.payload.variables,
          contextValue: await contextFactory(),
          rootValue: {
            execute,
            subscribe,
          },
        };
        const errors = validate(args.schema, args.document);
        if (errors.length) return errors;
        return args;
      },
    },
    wsServer
  );
  await new Promise((resolve, reject) => {
    server.listen(port, () => {
      console.log(`
        > App started!
        HTTP server running on http://${hostname}:${port}
        GraphQL WebSocket server running on ws://${hostname}:${port}${graphqlEndpoint}
        `);
    });
    // peerServer.listen(parseInt(process.env.PEER_PORT!), ()=>{
    //   console.log(`
    //     > peerServer listen to ${process.env.PEER_PORT}
    //   `)
    // });
  });
})();
