/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
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

export type PubSubChannelSubscriptionVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type PubSubChannelSubscription = {
  __typename?: "Subscription";
  exchange?: {
    __typename?: "Message";
    body?: string | null;
    from?: {
      __typename?: "User";
      id?: string | null;
      name?: string | null;
    } | null;
  } | null;
};

export type JoinChannelMutationVariables = Exact<{
  channelId?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type JoinChannelMutation = {
  __typename?: "Mutation";
  joinUser?: boolean | null;
};

export type SendChannelMutationVariables = Exact<{
  channelId?: InputMaybe<Scalars["ID"]["input"]>;
  body?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type SendChannelMutation = {
  __typename?: "Mutation";
  send?: boolean | null;
};

export type NewUserQueryVariables = Exact<{ [key: string]: never }>;

export type NewUserQuery = { __typename?: "Query"; newUser?: string | null };

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users?: Array<{
    __typename?: "User";
    id?: string | null;
    name?: string | null;
  } | null> | null;
};

export type ChannelsQueryVariables = Exact<{ [key: string]: never }>;

export type ChannelsQuery = {
  __typename?: "Query";
  channels?: Array<{
    __typename?: "Channel";
    id?: string | null;
    users?: Array<{
      __typename?: "User";
      id?: string | null;
      name?: string | null;
    } | null> | null;
  } | null> | null;
};

export type GetUserTokenQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserTokenQuery = { __typename?: "Query"; token?: string | null };

export const PubSubChannelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "subscription",
      name: { kind: "Name", value: "PubSubChannel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "exchange" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "from" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "body" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PubSubChannelSubscription,
  PubSubChannelSubscriptionVariables
>;
export const JoinChannelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "JoinChannel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "channelId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "joinUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "channelId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "channelId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JoinChannelMutation, JoinChannelMutationVariables>;
export const SendChannelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SendChannel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "channelId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "body" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          defaultValue: { kind: "StringValue", value: "", block: false },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "send" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "body" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "body" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "channelId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "channelId" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SendChannelMutation, SendChannelMutationVariables>;
export const NewUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "NewUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "newUser" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NewUserQuery, NewUserQueryVariables>;
export const UsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Users" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const ChannelsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Channels" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "channels" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "users" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ChannelsQuery, ChannelsQueryVariables>;
export const GetUserTokenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserToken" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "token" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "StringValue",
                  value: "cd32c3d5-830a-4031-b661-2d8e79eda74c",
                  block: false,
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserTokenQuery, GetUserTokenQueryVariables>;
