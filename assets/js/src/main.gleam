import gleam/javascript/array
import gleam/javascript/promise

external type Stargazer

external fn get_stargazers(
  username: String,
  repo: String,
) -> promise.Promise(array.Array(Stargazer)) =
  "./ffi.mjs" "get_starsgazers"

external fn set_stars(id: String, star_count: Int) -> Nil =
  "./ffi.mjs" "set_stars"

fn starcount(
  username: String,
  repo: String,
  fallback: Int,
) -> promise.Promise(Int) {
  get_stargazers(username, repo)
  |> promise.map(array.length)
  |> promise.rescue(fn(_ignore) { fallback })
}

pub fn main() {
  starcount("bwireman", "gleam_pb", 12)
  |> promise.map(set_stars("gleam-pb-stars", _))

  starcount("bwireman", "censys_ex", 4)
  |> promise.map(set_stars("censys-ex-stars", _))
}
