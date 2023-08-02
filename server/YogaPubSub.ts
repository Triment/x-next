import { createPubSub } from "graphql-yoga";

export const pubSub = createPubSub<{
  newMessage: [payload: { from: string; body: string }]
}>()