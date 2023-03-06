// https://stackoverflow.com/a/52323412/769780

type shallowCompare = (a: Record<string, any>, b: Record<string, any>) => boolean

export default function shallowCompare (...args: Parameters<shallowCompare>): ReturnType<shallowCompare> {
  const [a, b] = args
  const sameLength = Object.keys(a).length === Object.keys(b).length
  const sameKeyValues = Object.keys(a).every(key => {
    return b.hasOwnProperty(key) && a[key] === b[key]
  })

  return sameLength && sameKeyValues
}
