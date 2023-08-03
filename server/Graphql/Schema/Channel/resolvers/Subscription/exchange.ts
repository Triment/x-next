import { pipe } from "graphql-yoga";
import type { SubscriptionResolvers } from "./../../../types.generated.js";
export const exchange: NonNullable<SubscriptionResolvers["exchange"]> = {
  subscribe: async (_parent, _args, _ctx) => {
    /* Implement Subscription.exchange resolver logic here */
    // console.log(_ctx.user);
    // if (_ctx.user && _ctx.user.id) {
    //   const channel = await _ctx.prisma.channel.findUnique({
    //     where: { id },
    //     select: {
    //       users: true,
    //     },
    //   });
    console.log(_args, "id");
    return pipe(_ctx.pubSub.subscribe("channel", _args.id!));
    // }
    // return pipe(Repeater.merge([undefined]));
  },
  resolve: (payload: any) => payload,
};
