'use client';

import { authExchange } from '@urql/exchange-auth';
import { UrqlProvider, cacheExchange, createClient, fetchExchange, ssrExchange, subscriptionExchange } from '@urql/next';
import { createClient as createWSClient } from 'graphql-ws';

const wsClient = createWSClient({
  url: 'ws://localhost:3000/api/graphql',
});

const wsExchange = subscriptionExchange({
  forwardSubscription(request) {
    const input = { ...request, query: request.query || '' };
    return {
      subscribe(sink) {
        const unsubscribe = wsClient.subscribe(input, sink);
        return { unsubscribe };
      },
    };
  },
});
const ssr = ssrExchange();

async function initializeAuthState() {
  if (typeof window === 'undefined') {
    return {}
  }
  const token = localStorage.getItem('token');
  return { token };
}

const auth = authExchange(async (utils)=>{
  const { token }= await initializeAuthState();
  return {
    addAuthToOperation(operation:any) {
       let token = localStorage.getItem('token');
      if (!token) return operation;
      return utils.appendHeaders(operation, {
        Authorization: `Bearer ${token}`,
      });
    },
    didAuthError(error: { graphQLErrors: any[]; }, _operation: any) {
      return error.graphQLErrors.some(e => e.extensions?.code === 'FORBIDDEN');
    },
    async refreshAuth() {
      ;
    },
    willAuthError(_operation) {
      // Check whether `token` JWT is expired
      return false;
    }
  };
})
const client = createClient({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [cacheExchange, ssr, fetchExchange, wsExchange, auth],
});

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}