export const set_stars = (id, repo) => {
    let new_content = "";

    if (repo.stargazers_count > 0) {
        new_content = `<i id="${id}-icon" class="far fa-star"> ${repo.stargazers_count}</i>`
    }

    let el = document.getElementById(id);
    el.classList = "";
    el.innerHTML = new_content;
}

export const get_repos = (username) => {
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then(r => r.json())
}

export const find = (repos, name, fallback) => {
    let res = repos.filter(r => r.name == name)

    if (res.length > 0) {
        return res[0];
    }

    return fallback;
};