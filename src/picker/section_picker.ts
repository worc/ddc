import { Section } from '../types/dewey'
import { Sections } from '../const/Section'
import shuffle from '../util/shuffle'

export default function sectionPicker(): Section {
  const shuffled = shuffle<Section>(Sections)

  return shuffled[0]
}
