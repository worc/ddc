import { describe, expect, test } from '@jest/globals'
import { mainClassPicker, divisionPicker, sectionPicker } from './_picker'
import { mainClassList } from '../const/MainClass'

describe('Pickers', () => {
  describe('By default return one class in an array', () => {
    test('Main class picker:', () => {
      const mainClass = mainClassPicker()[0]

      expect(mainClass.code).toBeTruthy()
      expect(mainClass.name).toBeTruthy()
    })

    test('Division picker', () => {
      const division = divisionPicker()[0]

      expect(division.code).toBeTruthy()
      expect(division.name).toBeTruthy()
    })

    test('Section picker', () => {
      const section = sectionPicker()[0]

      expect(section.code).toBeTruthy()
      expect(section.name).toBeTruthy()
    })
  })

  test('Return multiple classes', () => {
    const count = 5
    const mainClasses = mainClassPicker(count)

    expect(mainClasses).toHaveLength(5)
  })

  test('Can pick more than the length of the original array', () => {
    const count = 11
    const results = mainClassPicker(count)

    expect(results).toHaveLength(11)
    expect(results.length > mainClassList.length)
  })

  describe('Picking zero returns an empty array', () => {
    test('Main class picker', () => {
      const results = mainClassPicker(0)

      expect(results).toHaveLength(0)
    })

    test('Division picker', () => {
      const results = divisionPicker(0)

      expect(results).toHaveLength(0)
    })

    test('Section picker', () => {
      const results = sectionPicker(0)

      expect(results).toHaveLength(0)
    })
  })
})
