import shuffle from './shuffle'

/**
 * Does not return, only yields. So, the middle argument in the
 * type definition of Generator<> is void
 *
 * @param list
 */
function * getFromShuffled<T> (list: T[]): Generator<T, void, boolean> {
  let index = 0
  shuffle<T>(list)

  while (list) {
    if (index >= list.length) {
      shuffle(list)
      index = 0
    }

    yield list[index++]
  }
}

// function * drainFromShuffled<T> (list: T[]) {
//   shuffle(list);
//
//   while(list.length > 0) {
//     yield list.pop()
//   }
// }

// export { getFromShuffled, drainFromShuffled }

export { getFromShuffled }