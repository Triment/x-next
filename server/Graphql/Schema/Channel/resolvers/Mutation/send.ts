import type { MutationResolvers } from "./../../../types.generated.js";
export const send: NonNullable<MutationResolvers["send"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Mutation.send resolver logic here */
  console.log(_ctx.user, _arg.channelId);
  _ctx.pubSub.publish("channel", _arg.channelId!, {
    from: _ctx.user!,
    body: _arg.body!,
  });
  return true;
};
