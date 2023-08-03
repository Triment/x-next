import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'
import type { CodegenConfig } from '@graphql-codegen/cli'
const isProduction = process.env.NODE_ENV === 'production'
const config: CodegenConfig = {
  schema: './server/Graphql/Schema/**/*/schema.graphql',
  documents: ['app/**/*.tsx', 'app/**/*.ts', 'components/**/*.tsx', 'components/**/*.ts'],
  ignoreNoDocuments: true,
  emitLegacyCommonJSImports: true,
  generates: {
    'server/Graphql/Schema': defineConfig({
      emitLegacyCommonJSImports: false,
      typesPluginsConfig: {
        mappers: {
          //此处放置prisma映射到user
          User: '@prisma/client#User as UserModel',
        },
        inputMaybeValue: 'undefined | T',
        contextType: './contextType.js#ContextDefs',
      },
    }),
    // preset: 'graphql-modules',
    // presetConfig: {
    //   baseTypesPath: 'types.ts',
    //   filename: 'index.ts',
    //   useGraphQLModules: false,
    // },
    './app/helpers/gql/': {
      preset: 'client',
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write', 'eslint --fix'] },
  watch: !isProduction,
}
export default config