interface HexPackage {
  name: string
  downloads_all: number
  downloads_recent: number
}

export async function getPackage(package_name: string): Promise<HexPackage | null> {
  return fetch(`https://hex.pm/api/packages/${package_name}`)
    .then(r => r.json())
    .then(({downloads: {recent, all}}) => {
      return {
        name: package_name,
        downloads_all: all,
        downloads_recent: recent
      }
    })
    .catch(() => null)
}
