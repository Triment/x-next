import { JWTPayload } from "jose";
import { customSign } from "../../../../../JWT/sign.js";
import type { QueryResolvers } from "./../../../types.generated.js";
export const token: NonNullable<QueryResolvers["token"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.token resolver logic here */
  const user = await _ctx.prisma.user.findUnique({
    where: { id: _arg.id },
    include: {
      channels: true,
    },
  });
  return await customSign(user as JWTPayload);
};
