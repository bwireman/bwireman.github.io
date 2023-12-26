<script lang="ts">
  import {general} from "../stores/general"
  import type {Skill} from "../types"
  import SkillList from "./SkillList.svelte"

  export let skills: Skill[] = []
  const left: Skill[] = []
  const right: Skill[] = []
  $: if (!$general.isMobile) {
    for (let i = 0; i < skills.length; i++) {
      if (i < skills.length / 2) {
        left.push(skills[i])
      } else {
        right.push(skills[i])
      }
    }
  }
</script>

{#if $general.isMobile}
  <div class="content is-size-6">
    <SkillList {skills} />
  </div>
{:else}
  <div class="columns">
    <div class="column">
      <div class="content is-size-6">
        <SkillList skills={left} />
      </div>
    </div>
    <div class="column">
      <div class="content is-size-6">
        <SkillList skills={right} />
      </div>
    </div>
  </div>
{/if}
