import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { createYoga, createSchema } from 'graphql-yoga';
import { useServer } from 'graphql-ws/lib/use/ws';
import { parse } from 'url';
import next from 'next';
import { typeDefs } from './Graphql/Schema/typeDefs.generated.js';
import { resolvers } from './Graphql/Schema/resolvers.generated.js';
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
// prepare nextjs
const app = next({ dev, hostname, port });
// match the route next would use if yoga was in `pages/api/graphql.ts`
const graphqlEndpoint = '/api/graphql';
// prepare yoga
const yoga = createYoga({
    graphqlEndpoint,
    graphiql: {
        subscriptionsProtocol: 'WS'
    },
    schema: createSchema({
        typeDefs,
        resolvers,
    })
});
(async () => {
    await app.prepare();
    const handle = app.getRequestHandler();
    // create http server
    const server = createServer(async (req, res) => {
        try {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const url = parse(req.url!, true);
            if (url.pathname!.startsWith(graphqlEndpoint)) {
                await yoga(req, res);
            }
            else {
                await handle(req, res, url);
            }
        }
        catch (err) {
            console.error(`Error while handling ${req.url}`, err);
            res.writeHead(500).end();
        }
    });
    // create websocket server
    const wsServer = new WebSocketServer({ server, path: graphqlEndpoint });
    // prepare graphql-ws
    useServer({
        execute: (args:any) => args.rootValue.execute(args),
        subscribe: (args:any) => args.rootValue.subscribe(args),
        onSubscribe: async (ctx, msg) => {
            const { schema, execute, subscribe, contextFactory, parse, validate } = yoga.getEnveloped({
                ...ctx,
                req: ctx.extra.request,
                socket: ctx.extra.socket,
                params: msg.payload
            });
            const args = {
                schema,
                operationName: msg.payload.operationName,
                document: parse(msg.payload.query),
                variableValues: msg.payload.variables,
                contextValue: await contextFactory(),
                rootValue: {
                    execute,
                    subscribe
                }
            };
            const errors = validate(args.schema, args.document);
            if (errors.length)
                return errors;
            return args;
        }
    }, wsServer);
    await new Promise((resolve, reject) => server.listen(port, () => { }));
    console.log(`
> App started!
  HTTP server running on http://${hostname}:${port}
  GraphQL WebSocket server running on ws://${hostname}:${port}${graphqlEndpoint}
`);
})();
