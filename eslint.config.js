import jaxonTSConfig from '@jaxonzhao/eslint-config-typescript'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...jaxonTSConfig,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'n/file-extension-in-import': 0,
    },
  },
]
