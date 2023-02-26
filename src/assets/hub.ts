import { writable, type Writable } from "svelte/store"

interface Repo {
    name: string
    stargazers_count: number
}

export const repos: Writable<Repo[]> = writable([]);

export async function getRepos(username: string): Promise<Repo[]> {
    return await fetch(`https://api.github.com/users/${username}/repos`)
        .then(r => r.json())
}

export async function getStars(repos: Repo[], name: string, fallback: number): Promise<number> {
    let res = repos.filter(r => r.name == name)

    if (res.length > 0) {
        return res[0].stargazers_count;
    }

    return fallback;
};