<script lang="ts">
  import {onDestroy, onMount} from "svelte"
  import Highlight from "svelte-highlight"
  import type {LanguageType} from "svelte-highlight/languages"

  export let name: string
  export let language: LanguageType<string>
  export let source: string

  let code = ""
  let i = 0
  let writer: number
  onMount(() => {
    writer = setInterval(() => {
      code = source.substring(0, i)
      i += 5

      if (code.length >= source.length) {
        clearInterval(writer)
      }
    }, 35)
  })

  onDestroy(() => {
    if (writer) {
      clearInterval(writer)
    }
  })
</script>

<div id={`${name}-snippet`}>
  <Highlight --langtag-color="whitesmoke" langtag={true} {language} {code} />
</div>
