import { Section } from '../types/dewey'
import { Sections } from '../const/Section'
import pickFromGenerator from '../util/pickFromGenerator'

export default function sectionsectionPicker(count = 1): Section[] {
  return pickFromGenerator<Section>(Sections, count)
}
