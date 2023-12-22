<script lang="ts">
  import {repos, getStars} from "../stores/hub"
  import Code from "./Code.svelte"
  import type {LanguageType} from "svelte-highlight/languages"
  import {getSnippet, snippetShowing} from "../stores/snippets"
  import {slide} from "svelte/transition"
  import {getPackage as getHex} from "../hex"
  import {getPackage as getNpm} from "../npm"

  export let title: string
  export let description: string
  export let lang: string
  export let repo: string
  export let packageUrl = ""
  export let starCountFallback: number | null
  export let language: LanguageType<string>
  export let snippet: string
  export let snippetStart = 0
  export let snippetEnd = 500
  export let hex = false
  export let npm = false

  let hide = true
  $: showSnippet = $snippetShowing == repo && !hide
  const expand = () => {
    hide = showSnippet
    snippetShowing.set(repo)
  }
</script>

<div class="card dark-card">
  <div class="card-content">
    <p class="title">{title}</p>
    <p class="subtitle">{description}</p>
    <span>
      {#if starCountFallback}
        {#await getStars($repos, repo, starCountFallback)}
          <div class="loader" />
        {:then star_count}
          <i class="far fa-star">{star_count}</i>
        {/await}
      {/if}

      {#if hex}
        {#await getHex(repo)}
          <div class="loader" />
        {:then pm}
          {#if pm}
            <i class="fa-solid fa-download">&ThinSpace;{pm.downloads_all}</i>
          {/if}
        {/await}
      {/if}

      {#if npm}
        {#await getNpm(repo)}
          <div class="loader" />
        {:then pm}
          {#if pm}
            <i class="fa-solid fa-download">&ThinSpace;{pm.downloads_all}</i>
          {/if}
        {/await}
      {/if}
    </span>

    {#await getSnippet(repo, snippet, snippetStart, snippetEnd)}
      {#if showSnippet}
        <div class="loader" />
      {/if}
    {:then source}
      {#if showSnippet}
        <div in:slide out:slide>
          <Code name={repo} {language} {source} />
        </div>
      {/if}
    {/await}
  </div>
  <footer class={`card-footer lang-footer ${lang}`}>
    <a target="_blank" href={`https://github.com/bwireman/${repo}`} class="card-footer-item">
      <span class="icon is-size-3"><i class="fab fa-github" /></span>
    </a>
    {#if packageUrl}
      <a target="_blank" href={packageUrl} class="card-footer-item">
        <span class="icon is-size-3">📦</span>
      </a>
    {/if}
    <!-- svelte-ignore a11y-missing-attribute -->
    <a id={`${repo}-toggle-snippet`} on:keypress={expand} on:click={expand} class="card-footer-item">
      <span class="icon is-size-5"><i class="fa-solid fa-code" /></span>
    </a>
  </footer>
</div>
