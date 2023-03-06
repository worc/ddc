import { MainClass } from '../types/dewey'
import { MainClasses } from '../const/MainClass'
import pickFromGenerator from '../util/pickFromGenerator'

export default function mainClassPicker(count = 1):  MainClass[] {
  return pickFromGenerator<MainClass>(MainClasses, count)
}
