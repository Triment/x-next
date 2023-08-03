import { GraphQLResolveInfo } from "graphql";
import { User as UserModel } from "@prisma/client";
import { ContextDefs } from "./contextType.js";
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Channel = {
  __typename?: "Channel";
  id?: Maybe<Scalars["ID"]["output"]>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Message = {
  __typename?: "Message";
  body?: Maybe<Scalars["String"]["output"]>;
  from?: Maybe<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  joinUser?: Maybe<Scalars["Boolean"]["output"]>;
  send?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MutationJoinUserArgs = {
  channelId?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationSendArgs = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  channelId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  channels?: Maybe<Array<Maybe<Channel>>>;
  newUser?: Maybe<Scalars["ID"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryTokenArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  exchange?: Maybe<Message>;
};

export type SubscriptionExchangeArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Channel: ResolverTypeWrapper<
    Omit<Channel, "users"> & {
      users?: Maybe<Array<Maybe<ResolversTypes["User"]>>>;
    }
  >;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Message: ResolverTypeWrapper<
    Omit<Message, "from"> & { from?: Maybe<ResolversTypes["User"]> }
  >;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<UserModel>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Channel: Omit<Channel, "users"> & {
    users?: Maybe<Array<Maybe<ResolversParentTypes["User"]>>>;
  };
  ID: Scalars["ID"]["output"];
  Message: Omit<Message, "from"> & {
    from?: Maybe<ResolversParentTypes["User"]>;
  };
  String: Scalars["String"]["output"];
  Mutation: {};
  Boolean: Scalars["Boolean"]["output"];
  Query: {};
  Subscription: {};
  User: UserModel;
};

export type ChannelResolvers<
  ContextType = ContextDefs,
  ParentType extends
    ResolversParentTypes["Channel"] = ResolversParentTypes["Channel"],
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<
  ContextType = ContextDefs,
  ParentType extends
    ResolversParentTypes["Message"] = ResolversParentTypes["Message"],
> = {
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = ContextDefs,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  joinUser?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    Partial<MutationJoinUserArgs>
  >;
  send?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    Partial<MutationSendArgs>
  >;
};

export type QueryResolvers<
  ContextType = ContextDefs,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  channels?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Channel"]>>>,
    ParentType,
    ContextType
  >;
  newUser?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<QueryTokenArgs>
  >;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
};

export type SubscriptionResolvers<
  ContextType = ContextDefs,
  ParentType extends
    ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"],
> = {
  exchange?: SubscriptionResolver<
    Maybe<ResolversTypes["Message"]>,
    "exchange",
    ParentType,
    ContextType,
    Partial<SubscriptionExchangeArgs>
  >;
};

export type UserResolvers<
  ContextType = ContextDefs,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ContextDefs> = {
  Channel?: ChannelResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
