<script lang="ts">
  import {onMount} from "svelte"

  const gen_size = () => Math.floor(Math.random() * 5) + 2
  const gen_delay = () => Math.random()
  const gen_duration = () => Math.random() + 1.25

  interface Bubble {
    size: number
    delay: number
    duration: number
  }

  let bubbles: Bubble[] = []
  const gen_style = (idx: number, {size, delay, duration}: Bubble) => {
    return `margin-left: ${
      idx % 100
    }%; width: ${size}rem; height: ${size}rem; animation-delay: ${delay}s; animation-duration: ${duration}s;`
  }

  onMount(() => {
    for (let i = 0; i < 200; i++) {
      bubbles[i] = {size: gen_size(), delay: gen_delay(), duration: gen_duration()}
    }
  })
</script>

<div class="floor">
  {#each bubbles as bubble, i}
    <div class="bo bounce" style={gen_style(i, bubble)} />
  {/each}
</div>

<style lang="scss">
  $dark: #2e333d;

  .floor {
    bottom: 0;
    background-color: $dark;
    place-self: end center;
    position: fixed;
    max-height: 1rem;
    width: 100%;
  }

  .bounce {
    left: -1.5rem;
    border-radius: 100%;
    position: fixed;

    animation-name: bounce;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.5, 0.07, 0.64, 1);
  }

  @keyframes bounce {
    0% {
      background-color: $dark;
      transform: scale(1) translateY(0rem);
    }
    100% {
      background-color: whitesmoke;
      transform: scale(0) translateY(-6rem);
      opacity: 0;
    }
  }
</style>
