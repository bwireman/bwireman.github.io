<script lang="ts">
  import { repos, getStars } from "../assets/hub";

  export let title: string;
  export let description: string;
  export let lang: string;
  export let repo: string;
  export let packageUrl: string = "";
  export let star_count_fallback: number;

  $: star_count_promise = getStars($repos, repo, star_count_fallback);
</script>

<div class="card dark-card">
  <div class="card-content">
    <p class="title">{title}</p>
    <p class="subtitle">{description}</p>

    {#await star_count_promise}
      <div class="loader" id="gleam-pb-stars" />
    {:then star_count}
      <i class="far fa-star">{star_count}</i>
    {/await}
  </div>
  <footer class={`card-footer lang-footer ${lang}`}>
    <a href={`https://github.com/bwireman/${repo}`} class="card-footer-item">
      <span class="icon is-size-3"><i class="fab fa-github" /></span>
    </a>
    {#if packageUrl}
      <a href={packageUrl} class="card-footer-item">
        <span class="icon is-size-3">📦</span>
      </a>
    {/if}
  </footer>
</div>
