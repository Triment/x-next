/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'subscription PubSubChannel($id: ID = "") {\n  exchange(id: $id) {\n    from {\n      id\n      name\n    }\n    body\n  }\n}':
    types.PubSubChannelDocument,
  'mutation JoinChannel($channelId: ID = "", $id: ID = "") {\n  joinUser(channelId: $channelId, id: $id)\n}':
    types.JoinChannelDocument,
  'mutation SendChannel($channelId: ID = "", $body: String = "") {\n  send(body: $body, channelId: $channelId)\n}':
    types.SendChannelDocument,
  "query NewUser {\n  newUser\n}": types.NewUserDocument,
  "query Users {\n  users {\n    id\n    name\n  }\n}": types.UsersDocument,
  "query Channels {\n  channels {\n    id \n    users {\n      id\n      name\n    }\n  }\n}":
    types.ChannelsDocument,
  'query GetUserToken {\n  token(id: "cd32c3d5-830a-4031-b661-2d8e79eda74c")\n}':
    types.GetUserTokenDocument,
  'mutation SaveFile($file: File = "") {\n  saveFile(file: $file)\n}':
    types.SaveFileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'subscription PubSubChannel($id: ID = "") {\n  exchange(id: $id) {\n    from {\n      id\n      name\n    }\n    body\n  }\n}',
): (typeof documents)['subscription PubSubChannel($id: ID = "") {\n  exchange(id: $id) {\n    from {\n      id\n      name\n    }\n    body\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation JoinChannel($channelId: ID = "", $id: ID = "") {\n  joinUser(channelId: $channelId, id: $id)\n}',
): (typeof documents)['mutation JoinChannel($channelId: ID = "", $id: ID = "") {\n  joinUser(channelId: $channelId, id: $id)\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation SendChannel($channelId: ID = "", $body: String = "") {\n  send(body: $body, channelId: $channelId)\n}',
): (typeof documents)['mutation SendChannel($channelId: ID = "", $body: String = "") {\n  send(body: $body, channelId: $channelId)\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query NewUser {\n  newUser\n}",
): (typeof documents)["query NewUser {\n  newUser\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Users {\n  users {\n    id\n    name\n  }\n}",
): (typeof documents)["query Users {\n  users {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query Channels {\n  channels {\n    id \n    users {\n      id\n      name\n    }\n  }\n}",
): (typeof documents)["query Channels {\n  channels {\n    id \n    users {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetUserToken {\n  token(id: "cd32c3d5-830a-4031-b661-2d8e79eda74c")\n}',
): (typeof documents)['query GetUserToken {\n  token(id: "cd32c3d5-830a-4031-b661-2d8e79eda74c")\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation SaveFile($file: File = "") {\n  saveFile(file: $file)\n}',
): (typeof documents)['mutation SaveFile($file: File = "") {\n  saveFile(file: $file)\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
