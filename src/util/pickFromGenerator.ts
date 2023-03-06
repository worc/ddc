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
