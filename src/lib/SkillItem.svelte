<script lang="ts">
  interface Skill {
    name: string
    icon?: string
  }

  export let skills: Skill[] = []
</script>

<ul>
  {#each skills as skill}
    {#if skill.icon}
      <li>
        <i class={`${skill.icon}`} />
        {skill.name}
      </li>
    {:else}
      <li>
        {skill.name}
      </li>
    {/if}
  {/each}
</ul>
