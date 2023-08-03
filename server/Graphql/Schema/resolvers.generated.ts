/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated.js";
import { Channel } from "./Channel/resolvers/Channel.js";
import { Message } from "./Channel/resolvers/Message.js";
import { joinUser as Mutation_joinUser } from "./Channel/resolvers/Mutation/joinUser.js";
import { send as Mutation_send } from "./Channel/resolvers/Mutation/send.js";
import { channels as Query_channels } from "./Channel/resolvers/Query/channels.js";
import { newUser as Query_newUser } from "./User/resolvers/Query/newUser.js";
import { token as Query_token } from "./User/resolvers/Query/token.js";
import { users as Query_users } from "./User/resolvers/Query/users.js";
import { exchange as Subscription_exchange } from "./Channel/resolvers/Subscription/exchange.js";
import { User } from "./User/resolvers/User.js";
export const resolvers: Resolvers = {
  Query: {
    channels: Query_channels,
    newUser: Query_newUser,
    token: Query_token,
    users: Query_users,
  },
  Mutation: { joinUser: Mutation_joinUser, send: Mutation_send },
  Subscription: { exchange: Subscription_exchange },
  Channel: Channel,
  Message: Message,
  User: User,
};
