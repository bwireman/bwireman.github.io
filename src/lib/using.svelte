<script lang="ts">
  interface Props {
    image: string
    name: string
    link: string
  }

  let {image, name, link}: Props = $props()
</script>

<div class="tooltip">
  <span class="tooltiptext">{name}</span>
  <a target="_blank" class="link" href={link}>
    <span class="icon"><img src={image} alt="svelte-logo" /></span>
  </a>
</div>

<style lang="scss">
  $dark: #2e333d;

  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted $dark; /* If you want dots under the hoverable text */
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: auto;
    background-color: $dark;
    color: whitesmoke;
    text-align: center;
    padding: 0rem 0.5rem;
    border-radius: 0.25rem;

    position: absolute;
    z-index: 1;
    bottom: 100%;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
</style>
