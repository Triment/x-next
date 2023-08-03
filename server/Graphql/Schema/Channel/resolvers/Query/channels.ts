import type { QueryResolvers } from "./../../../types.generated.js";
export const channels: NonNullable<QueryResolvers["channels"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.channels resolver logic here */
  const channel = await _ctx.prisma.channel.findMany({
    select: { users: true, id: true },
  });
  return channel;
};
