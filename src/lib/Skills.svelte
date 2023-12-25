<script lang="ts">
  import {general} from "../stores/general"
  import SkillItem from "./SkillItem.svelte"

  interface Skill {
    name: string
    icon?: string
  }

  export let skills: Skill[] = []
  const left: Skill[] = []
  const right: Skill[] = []
  for (let i = 0; i < skills.length; i++) {
    if (i < skills.length / 2) {
      left.push(skills[i])
    } else {
      right.push(skills[i])
    }
  }
</script>

{#if $general.isMobile}
  <div class="content is-size-6">
    <SkillItem {skills} />
  </div>
{:else}
  <div class="columns">
    <div class="column">
      <div class="content is-size-6">
        <SkillItem skills={left} />
      </div>
    </div>
    <div class="column">
      <div class="content is-size-6">
        <SkillItem skills={right} />
      </div>
    </div>
  </div>
{/if}
