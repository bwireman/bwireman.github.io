<script lang="ts">
  import type {Skill} from "../types"

  interface Props {
    skills?: Skill[]
  }

  let {skills = []}: Props = $props()
</script>

<ul>
  {#each skills as skill}
    {#if skill.icon}
      <li>
        <i class={`${skill.icon}`}></i>
        {skill.name}
      </li>
    {:else}
      <li>
        {skill.name}
      </li>
    {/if}
  {/each}
</ul>
