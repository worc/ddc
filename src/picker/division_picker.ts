import { Division } from '../types/dewey'
import { Divisions } from '../const/Division'
import pickFromGenerator, { pickUntilSatisfied } from '../util/pickFromGenerator'

export default function divisionPicker(count = 1): Division[] {
  return pickFromGenerator<Division>(Divisions, count)
}

export function divisionPickUntilSatisfied(count: number, discriminator: (arg0: Division) => boolean): Division[] {
  return pickUntilSatisfied<Division>(Divisions, count, discriminator)
}
