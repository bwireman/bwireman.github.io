import {writable, type Writable} from "svelte/store"

export const snippetShowing: Writable<string> = writable("")

export async function getSnippet(
  repo: string,
  snippetPath: string,
  start = 0,
  end = 500,
  header = true
): Promise<string> {
  return fetch(`https://raw.githubusercontent.com/bwireman/${repo}/${snippetPath}`)
    .then(r => r.text())
    .then(source => {
      let res = source.split("\n").slice(start, end).join("\n")

      if (start !== 0 && header) {
        const firstLineIdx = source.indexOf("\n")
        res = source.substring(0, firstLineIdx) + "\n\n...\n\n" + res + "\n\n...\n\n"
      } else if (!header) {
        res = "...\n\n" + res + "\n..."
      }

      return res
    })
}
