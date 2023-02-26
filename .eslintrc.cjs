module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["svelte3", "@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
};
