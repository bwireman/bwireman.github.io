<script lang="ts">
  import {repos, getStars} from "../stores/hub"
  import Code from "./Code.svelte"
  import type {LanguageType} from "svelte-highlight/languages"
  import {getSnippet, snippetShowing} from "../stores/snippets"
  import {slide} from "svelte/transition"
  import {getPackage as getHex} from "../hex"
  import {getPackage as getNpm} from "../npm"

  interface Props {
    title: string
    description: string
    lang: string
    repo: string
    packageUrl?: string
    packageName?: string
    starCountFallback: number | null
    language: LanguageType<string>
    snippet: string
    snippetStart?: number
    snippetEnd?: number
    hex?: boolean
    npm?: boolean
    header?: boolean
  }

  let {
    title,
    description,
    lang,
    repo,
    packageUrl = "",
    packageName = "",
    starCountFallback,
    language,
    snippet,
    snippetStart = 0,
    snippetEnd = 500,
    hex = false,
    npm = false,
    header = true
  }: Props = $props()

  let hide = $state(true)
  let showSnippet = $derived($snippetShowing == repo && !hide)
  const expand = () => {
    hide = showSnippet
    snippetShowing.set(repo)
  }
</script>

<div class="hoverable card dark-card">
  <div class="card-content">
    <p class="title">{title}</p>
    <p class="subtitle">{description}</p>
    <span>
      {#if starCountFallback}
        {#await getStars($repos, repo, starCountFallback)}
          <div class="loader"></div>
        {:then star_count}
          <i class="far fa-star">{star_count}</i>
        {/await}
      {/if}

      {#if hex}
        {#await getHex(packageName || repo)}
          <div class="loader"></div>
        {:then pm}
          {#if pm}
            <i class="fa-solid fa-download">&ThinSpace;{pm.downloads_all}</i>
          {/if}
        {/await}
      {/if}

      {#if npm}
        {#await getNpm(packageName || repo)}
          <div class="loader"></div>
        {:then pm}
          {#if pm}
            <i class="fa-solid fa-download">&ThinSpace;{pm.downloads_all}</i>
          {/if}
        {/await}
      {/if}
    </span>

    {#await getSnippet(repo, snippet, snippetStart, snippetEnd, header)}
      {#if showSnippet}
        <div class="loader"></div>
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
      <span class="icon is-size-3"><i class="fab fa-github"></i></span>
    </a>
    {#if packageUrl}
      <a target="_blank" href={packageUrl} class="card-footer-item">
        <span class="icon is-size-3">📦</span>
      </a>
    {/if}
    <!-- svelte-ignore a11y_missing_attribute -->
    <a
      data-testid="snippet"
      id={`${repo}-toggle-snippet`}
      onkeypress={expand}
      onclick={expand}
      class="card-footer-item"
    >
      <span class="icon is-size-5"><i class="fa-solid fa-code"></i></span>
    </a>
  </footer>
</div>
