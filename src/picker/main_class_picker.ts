import { MainClass } from '../types/dewey'
import { MainClasses } from '../const/MainClass'
import shuffle from '../util/shuffle'

export default function mainClassPicker(): MainClass {
  const shuffled = shuffle<MainClass>(MainClasses)

  return shuffled[0]
}
