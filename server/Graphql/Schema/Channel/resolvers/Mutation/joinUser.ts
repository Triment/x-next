import type { MutationResolvers } from "./../../../types.generated.js";
export const joinUser: NonNullable<MutationResolvers["joinUser"]> = async (
  _parent,
  { id, channelId },
  _ctx,
) => {
  /* Implement Mutation.joinUser resolver logic here */

  const user = await _ctx.prisma.user.findUnique({ where: { id } });
  if (user) {
    const channel = await _ctx.prisma.channel.upsert({
      where: { id: channelId },
      create: {
        id: channelId,
      },
      update: {
        users: {
          connect: {
            id,
          },
        },
      },
      select: {
        users: true,
        id: true,
      },
    });
    console.log(channel);
    if (channel) {
      return true;
    }
  }
  return false;
};
