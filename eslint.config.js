//@ts-check

import { useESLintConfig, useTs } from 'jpreset/eslint/index.mjs'

export default useESLintConfig(...useTs(import.meta.dirname), {
  rules: {
    'n/file-extension-in-import': 0,
  },
})
