import type { QueryResolvers } from "./../../../types.generated.js";
export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.users resolver logic here */
  return await _ctx.prisma.user.findMany();
};
