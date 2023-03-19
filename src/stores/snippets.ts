import { writable, type Writable } from "svelte/store"

export const snippetShowing: Writable<string> = writable("");

export async function getSnippet(repo: string, snippetPath: string, start: number = 0, end: number = 500): Promise<string> {
    return fetch(`https://raw.githubusercontent.com/bwireman/${repo}/${snippetPath}`)
        .then(r => r.text())
        .then(source => {
            if (start === 0 && end >= source.length) {
                return source;
            }
            let res = source.substring(start, end) + "\n\n..."

            if (start !== 0) {
                const firstLineIdx = source.indexOf('\n')
                res = source.substring(0, firstLineIdx) + "\n\n...\n\n" + res
            }

            return res;
        })
}
