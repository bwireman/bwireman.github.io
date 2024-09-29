<script lang="ts">
  import {Viewable} from "@svelte-plugins/viewable"
  const randAssign = (choices: string[], quote = true): string => {
    const c = choices[Math.floor(Math.random() * choices.length)]

    if (quote) {
      return `"${c}"`
    }

    return c
  }

  const emoji = randAssign(["🐙", "🐹", "🐲"], false)
  const firstMessage = randAssign(["Hey!", "Shoo!"])
  const midMessage = randAssign(["What are you doing here!?", "Why are you here?"])
  const endMessage = randAssign(["Go away!", "The stuffs up there!", "Leave!"])

  let lvl = 0
  let emojiElement: Element | undefined
  let endElement: Element | undefined

  const onViewEmoji = () => {
    if (lvl >= 5) return
    if (!endElement) return
    lvl += 1
    endElement.scrollIntoView({
      inline: "end",
      behavior: "smooth"
    })
  }

  const rules = {
    dwell: {duration: 0.8, percentage: 50, fn: onViewEmoji, repeat: true}
  }
</script>

<Viewable {rules} element={emojiElement}>
  <div bind:this={emojiElement} style="text-align: center; padding: 1rem;">
    {#if lvl > 0}
      <p style="font-size: 3.5rem" class="snark">{emoji}</p>
    {/if}

    {#if lvl > 1}
      <p class="snark">{firstMessage}</p>
    {/if}
    {#if lvl > 2}
      <p class="snark">{midMessage}</p>
    {/if}
    {#if lvl > 3}
      <p class="snark">{endMessage}</p>
    {/if}
  </div>
  <div class="snark" bind:this={endElement}></div>
</Viewable>
<!-- 
<style lang="scss">
  .chatbox {
    border-color: pink;
    border-width: 1rem;
    border-radius: 1rem;
    text-align: left;
    padding: 1rem;
    color: whitesmoke;
    background-color: #2e333d;
  }
</style> -->
