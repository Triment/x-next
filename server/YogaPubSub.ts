import { User } from "@prisma/client";
import { createPubSub } from "graphql-yoga";

export const pubSub = createPubSub<{
  notice: [payload: { title: string, body: string }],
  message: [ userId: string, payload: { from: User, body: string } ],
  channel: [ channelId: string, payload: { from: User, body: string } ]
}>()