// @ts-check

import eslint from "@eslint/js"
import typescript from "typescript-eslint"
import prettier from "eslint-plugin-prettier/recommended"

export default typescript.config(
  { ignores: ["*.config.*", "*.d.ts"] },
  { files: ["src/**/*.ts"] },

  eslint.configs.recommended,
  ...typescript.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  prettier,
)
