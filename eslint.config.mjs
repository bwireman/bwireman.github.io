import typescriptEslint from "typescript-eslint"
import globals from "globals"
import parser from "svelte-eslint-parser"
import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"

export default typescriptEslint.config(
  {
    ignores: ["**/*.cjs"]
  },
  js.configs.recommended,
  typescriptEslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      ecmaVersion: 2020,
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".svelte"]
      }
    }
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser,
      ecmaVersion: 5,
      sourceType: "script",
      parserOptions: {
        parser: typescriptEslint.parser
      }
    }
  },
  eslintConfigPrettier
)
