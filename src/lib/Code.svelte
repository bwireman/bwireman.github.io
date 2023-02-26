<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Highlight from "svelte-highlight";
  import type { LanguageType } from "svelte-highlight/languages";
  import theme from "svelte-highlight/styles/androidstudio";

  export let language: LanguageType<string>;
  export let source: string;

  $: code = "";
  let i = 0;

  let writer;

  onMount(() => {
    writer = setInterval(() => {
      code = source.substring(0, i);

      i += 5;
    }, 25);
  });

  onDestroy(() => {
    clearInterval(writer);
  });
</script>

<svelte:head>
  {@html theme}
</svelte:head>

<Highlight {language} {code} />
