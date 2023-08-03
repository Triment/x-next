import type { QueryResolvers } from "./../../../types.generated.js";
export const newUser: NonNullable<QueryResolvers["newUser"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.newUser resolver logic here */
  const user = await _ctx.prisma.user.create({
    data: {
      name: "test",
    },
  });
  return user.id;
};
