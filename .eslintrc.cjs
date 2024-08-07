module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  settings: {
  },
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'],
    sourceType: "module",
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
  }
};