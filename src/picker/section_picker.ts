import { Section } from '../types/dewey'
import { Sections } from '../const/Section'
import pickFromGenerator from '../util/pickFromGenerator'

export default function sectionPicker(): Section[] {
  return pickFromGenerator<Section>(Sections)
}
