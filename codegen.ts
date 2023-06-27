import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api-eu-central-1.hygraph.com/v2/cl7oxpeax3pg801uhhojx4bgb/master',
  documents: ['./src/graphql/queries/**/*.ts'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
  hooks: { afterOneFileWrite: ['prettier --write'] },
};

export default config;
