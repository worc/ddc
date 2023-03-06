import { getFromShuffled } from './getFromShuffled'

export default function pickFromGenerator<T> (list: T[], count = 1): T[] {
  const generator = getFromShuffled<T>(list)

  const results: T[] = []

  for (let i = 0; i < count; i++) {
    // coercing the type here since the generator never ends:
    results.push(generator.next().value as T)
  }

  return results
}

// export function pickAllFromGenerator<T> (list: T[]): T[] {
//   const results: T[] = []
//
//   for (const value of drainFromShuffled<T>(list)) {
//     results.push(value as T)
//   }
//
//   return results
// }

interface PickUntilSatisfied<T> {
  (
    list: T[],
    count: number,
    discriminator: (arg: T) => boolean,
  ) : T[]
}

export function pickUntilSatisfied<T>(...args: Parameters<PickUntilSatisfied<T>>): ReturnType<PickUntilSatisfied<T>> {
  const [list, count, discriminator] = args

  const results: T[] = []
  const pool: T[] = list.filter(discriminator)

  if (pool.length) {
    return pickFromGenerator<T>(pool, count)
  } else {
    return results
  }
}
