<script lang="ts">
  export let skills: string[] = []
</script>

<div class="content is-size-6">
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</div>
