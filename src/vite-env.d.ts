/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "@gleam-lang/highlight.js-gleam" {
  const gleam: (hljs: unknown) => object
  export default gleam
}
