import { PrismaClient, User } from "@prisma/client";
import { parse } from "cookie";
import { YogaInitialContext } from "graphql-yoga";
import { customVerify } from "./JWT/verify.js";
import { pubSub } from "./YogaPubSub.js";
const prisma = new PrismaClient();

export interface ContextType {
  prisma: PrismaClient,
  user?: User,
  pubSub: typeof pubSub,
}

export async function context({ request, params }: YogaInitialContext) {

  let ctx = {
    prisma,
    pubSub
  }
  if(!request) return ctx

  let token = request.headers.get("Authorization") ?? null;

  if (!token) {
    if (request.headers.get("cookie"))
      token = parse(request.headers.get("cookie")!)["token"];
  } else {
    token = token.split(" ")[1];//remove bearer
  }
  if (token) {
    return {
      user: await customVerify(token),
      ...ctx
    }
  }
  return ctx;
}
