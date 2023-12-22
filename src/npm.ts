// https://api.npmjs.org/downloads/range/2020-02-07:2023-12-14/esgleam

interface NPMPackage {
  name: string
  downloads_all: number
}

interface DownloadDate {
  downloads: number
}

function format(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export async function getPackage(package_name: string): Promise<NPMPackage | null> {
  const today = format(new Date())
  const past = new Date()
  // 18 months
  past.setDate(new Date().getDate() - 548)
  const start = format(past)

  return fetch(`https://api.npmjs.org/downloads/range/${start}:${today}/${package_name}`)
    .then(r => r.json())
    .then(({downloads}: {downloads: DownloadDate[]}) => {
      return {
        name: package_name,
        downloads_all: downloads.map(x => x.downloads).reduce((partialSum, a) => partialSum + a, 0)
      }
    })
    .catch(() => null)
}
