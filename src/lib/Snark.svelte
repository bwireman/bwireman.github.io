<script lang="ts">
  import {Viewable} from "@svelte-plugins/viewable"
  const randAssign = <T,>(choices: T[]): T => {
    return choices[Math.floor(Math.random() * choices.length)]
  }

  const [emoji, name] = randAssign([
    ["🐙", "Scary Octopus"],
    ["🐹", "Angry Hamster"],
    ["🐲", "Guardian Dragon"],
    ["👾", "Invader"]
  ])
  const firstMessage = randAssign(["Hey!", "Shoo!", "OI!"])
  const midMessage = randAssign(["What are you doing here!?", "Why are you here?"])
  const endMessage = randAssign(["Go away!", "The stuffs up there!", "Leave!"])

  let lvl = $state(0)
  let emojiElement: Element | undefined = $state()
  let endElement: Element | undefined = $state()

  const onViewEmoji = () => {
    if (lvl > 4) return
    if (!endElement) return
    lvl++
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
  <div class="columns is-centered">
    <div bind:this={emojiElement} class="column is-one-fifth" style="text-align: center; padding: 1rem;">
      {#if lvl > 0}
        <p style="font-size: 3.5rem" class="snark">{emoji}</p>
      {/if}
      {#if lvl > 1}
        <div class="chatbox">
          <p class="name">{name}</p>
          <p class="snark">{firstMessage}</p>
          {#if lvl > 2}
            <p class="snark">{midMessage}</p>
          {/if}
          {#if lvl > 3}
            <p class="snark">{endMessage}</p>
          {/if}
        </div>
      {/if}
    </div>
  </div>
  <div bind:this={endElement}></div>
</Viewable>

<style lang="scss">
  .chatbox {
    font-family: "JetBrains Mono", monospace;
    border-style: solid;
    border-color: #61656e;
    border-width: 0.5rem;
    border-radius: 1rem;
    text-align: left;
    padding: 0.5rem;
    color: whitesmoke;
    background-color: #2e333d;
  }

  .chatbox > .name {
    float: right;
    text-align: center;
    position: relative;
    top: -1.5rem;
    color: whitesmoke;
    background-color: #61656e;
    max-width: fit-content;
    padding: 0rem 0.25rem 0rem 0.25rem;
    border-radius: 0.25rem;
    font-family: "JetBrains Mono", monospace;
  }
</style>
