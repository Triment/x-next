import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Channel", loc: { start: 5, end: 12 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 17, end: 19 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 21, end: 23 } },
            loc: { start: 21, end: 23 },
          },
          directives: [],
          loc: { start: 17, end: 23 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "users", loc: { start: 26, end: 31 } },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 34, end: 38 },
              },
              loc: { start: 34, end: 38 },
            },
            loc: { start: 33, end: 39 },
          },
          directives: [],
          loc: { start: 26, end: 39 },
        },
      ],
      loc: { start: 0, end: 41 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 48, end: 52 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 57, end: 59 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 61, end: 63 } },
            loc: { start: 61, end: 63 },
          },
          directives: [],
          loc: { start: 57, end: 63 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 66, end: 70 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 72, end: 78 },
            },
            loc: { start: 72, end: 78 },
          },
          directives: [],
          loc: { start: 66, end: 78 },
        },
      ],
      loc: { start: 43, end: 80 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Channel", loc: { start: 87, end: 94 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 99, end: 101 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 103, end: 105 } },
            loc: { start: 103, end: 105 },
          },
          directives: [],
          loc: { start: 99, end: 105 },
        },
      ],
      loc: { start: 82, end: 107 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Channel", loc: { start: 114, end: 121 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "users", loc: { start: 126, end: 131 } },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 134, end: 138 },
              },
              loc: { start: 134, end: 138 },
            },
            loc: { start: 133, end: 139 },
          },
          directives: [],
          loc: { start: 126, end: 139 },
        },
      ],
      loc: { start: 109, end: 141 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Message", loc: { start: 148, end: 155 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "from", loc: { start: 160, end: 164 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 166, end: 170 },
            },
            loc: { start: 166, end: 170 },
          },
          directives: [],
          loc: { start: 160, end: 170 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 173, end: 177 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 179, end: 185 },
            },
            loc: { start: 179, end: 185 },
          },
          directives: [],
          loc: { start: 173, end: 185 },
        },
      ],
      loc: { start: 143, end: 187 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Message", loc: { start: 194, end: 201 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "from", loc: { start: 206, end: 210 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 212, end: 216 },
            },
            loc: { start: 212, end: 216 },
          },
          directives: [],
          loc: { start: 206, end: 216 },
        },
      ],
      loc: { start: 189, end: 218 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Message", loc: { start: 225, end: 232 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "body", loc: { start: 237, end: 241 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 243, end: 249 },
            },
            loc: { start: 243, end: 249 },
          },
          directives: [],
          loc: { start: 237, end: 249 },
        },
      ],
      loc: { start: 220, end: 251 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 258, end: 263 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "channels",
            loc: { start: 268, end: 276 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Channel",
                loc: { start: 279, end: 286 },
              },
              loc: { start: 279, end: 286 },
            },
            loc: { start: 278, end: 287 },
          },
          directives: [],
          loc: { start: 268, end: 287 },
        },
      ],
      loc: { start: 253, end: 289 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 296, end: 304 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "joinUser",
            loc: { start: 309, end: 317 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "channelId",
                loc: { start: 318, end: 327 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 329, end: 331 },
                },
                loc: { start: 329, end: 331 },
              },
              directives: [],
              loc: { start: 318, end: 331 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 333, end: 335 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 337, end: 339 },
                },
                loc: { start: 337, end: 339 },
              },
              directives: [],
              loc: { start: 333, end: 339 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 342, end: 349 },
            },
            loc: { start: 342, end: 349 },
          },
          directives: [],
          loc: { start: 309, end: 349 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "send", loc: { start: 352, end: 356 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "channelId",
                loc: { start: 357, end: 366 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 368, end: 370 },
                },
                loc: { start: 368, end: 370 },
              },
              directives: [],
              loc: { start: 357, end: 370 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "body",
                loc: { start: 372, end: 376 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 378, end: 384 },
                },
                loc: { start: 378, end: 384 },
              },
              directives: [],
              loc: { start: 372, end: 384 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 387, end: 394 },
            },
            loc: { start: 387, end: 394 },
          },
          directives: [],
          loc: { start: 352, end: 394 },
        },
      ],
      loc: { start: 291, end: 396 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 403, end: 411 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "joinUser",
            loc: { start: 416, end: 424 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "channelId",
                loc: { start: 425, end: 434 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 436, end: 438 },
                },
                loc: { start: 436, end: 438 },
              },
              directives: [],
              loc: { start: 425, end: 438 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 440, end: 442 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 444, end: 446 },
                },
                loc: { start: 444, end: 446 },
              },
              directives: [],
              loc: { start: 440, end: 446 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 449, end: 456 },
            },
            loc: { start: 449, end: 456 },
          },
          directives: [],
          loc: { start: 416, end: 456 },
        },
      ],
      loc: { start: 398, end: 458 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 465, end: 473 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "send", loc: { start: 478, end: 482 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "channelId",
                loc: { start: 483, end: 492 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 494, end: 496 },
                },
                loc: { start: 494, end: 496 },
              },
              directives: [],
              loc: { start: 483, end: 496 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "body",
                loc: { start: 498, end: 502 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 504, end: 510 },
                },
                loc: { start: 504, end: 510 },
              },
              directives: [],
              loc: { start: 498, end: 510 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean",
              loc: { start: 513, end: 520 },
            },
            loc: { start: 513, end: 520 },
          },
          directives: [],
          loc: { start: 478, end: 520 },
        },
      ],
      loc: { start: 460, end: 522 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Subscription",
        loc: { start: 529, end: 541 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "exchange",
            loc: { start: 546, end: 554 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 555, end: 557 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 559, end: 561 },
                },
                loc: { start: 559, end: 561 },
              },
              directives: [],
              loc: { start: 555, end: 561 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Message",
              loc: { start: 564, end: 571 },
            },
            loc: { start: 564, end: 571 },
          },
          directives: [],
          loc: { start: 546, end: 571 },
        },
      ],
      loc: { start: 524, end: 573 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 579, end: 583 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 588, end: 590 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 592, end: 594 } },
            loc: { start: 592, end: 594 },
          },
          directives: [],
          loc: { start: 588, end: 594 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 597, end: 601 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 603, end: 609 },
            },
            loc: { start: 603, end: 609 },
          },
          directives: [],
          loc: { start: 597, end: 609 },
        },
      ],
      loc: { start: 574, end: 611 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 618, end: 623 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "newUser",
            loc: { start: 628, end: 635 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 637, end: 639 } },
            loc: { start: 637, end: 639 },
          },
          directives: [],
          loc: { start: 628, end: 639 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "token", loc: { start: 642, end: 647 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 648, end: 650 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 652, end: 654 },
                },
                loc: { start: 652, end: 654 },
              },
              directives: [],
              loc: { start: 648, end: 654 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 657, end: 663 },
            },
            loc: { start: 657, end: 663 },
          },
          directives: [],
          loc: { start: 642, end: 663 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "users", loc: { start: 666, end: 671 } },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "User",
                loc: { start: 674, end: 678 },
              },
              loc: { start: 674, end: 678 },
            },
            loc: { start: 673, end: 679 },
          },
          directives: [],
          loc: { start: 666, end: 679 },
        },
      ],
      loc: { start: 613, end: 681 },
    },
  ],
  loc: { start: 0, end: 682 },
} as unknown as DocumentNode;
