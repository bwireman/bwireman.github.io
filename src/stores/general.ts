import {writable, type Writable} from "svelte/store"

interface General {
  isMobile: boolean
}

export const general: Writable<General> = writable({isMobile: false})
