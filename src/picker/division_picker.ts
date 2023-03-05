import { Division } from '../types/dewey'
import { Divisions } from '../const/Division'
import shuffle from '../util/shuffle'

export default function mainClassPicker(): Division {
  const shuffled = shuffle<Division>(Divisions)

  return shuffled[0]
}
