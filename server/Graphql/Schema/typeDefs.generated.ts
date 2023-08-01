import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 5, end: 9 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 14, end: 16 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 18, end: 20 } },
            loc: { start: 18, end: 20 },
          },
          directives: [],
          loc: { start: 14, end: 20 },
        },
      ],
      loc: { start: 0, end: 22 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 29, end: 34 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "m", loc: { start: 39, end: 40 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Int", loc: { start: 42, end: 45 } },
            loc: { start: 42, end: 45 },
          },
          directives: [],
          loc: { start: 39, end: 45 },
        },
      ],
      loc: { start: 24, end: 47 },
    },
  ],
  loc: { start: 0, end: 48 },
} as unknown as DocumentNode;
