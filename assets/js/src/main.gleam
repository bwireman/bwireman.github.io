import gleam/javascript/array
import gleam/javascript/promise

pub type Repo {
  Repo(name: String, stargazers_count: Int)
  StarCount(stargazers_count: Int)
}

external fn get_repos(username: String) -> promise.Promise(array.Array(Repo)) =
  "./ffi.mjs" "get_repos"

external fn set_stars(id: String, repo: Repo) -> Nil =
  "./ffi.mjs" "set_stars"

external fn find(repos: array.Array(Repo), name: String, default: Repo) -> Repo =
  "./ffi.mjs" "find"

pub fn main() {
  get_repos("bwireman")
  |> promise.rescue(fn(_) { array.from_list([]) })
  |> promise.map(fn(repos) {
    find(repos, "gleam_pb", StarCount(12))
    |> set_stars("gleam-pb-stars", _)

    find(repos, "censys_ex", StarCount(4))
    |> set_stars("censys-ex-stars", _)

    find(repos, "esgleam", StarCount(5))
    |> set_stars("esgleam-stars", _)
  })
}
