import { Division } from '../types/dewey'
import { Divisions } from '../const/Division'
import pickFromGenerator from '../util/pickFromGenerator'

export default function divisionPicker(count = 1): Division[] {
  return pickFromGenerator<Division>(Divisions, count)
}
