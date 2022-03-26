export const set_stars = (id, star_count) => {
    let new_content = "";
    if (star_count > 0) {
        new_content = `<i id="${id}-icon" class="far fa-star"> ${star_count}</i>`
    }

    let el = document.getElementById(id);
    el.classList = "";
    el.innerHTML = new_content;
}

export const get_starsgazers = (username, repo) => {
    return fetch(`https://api.github.com/repos/${username}/${repo}/stargazers`)
        .then(r => r.json())
}
