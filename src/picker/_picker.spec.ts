import { describe, expect, test } from '@jest/globals'
import { mainClassPicker, divisionPicker, sectionPicker } from './_picker'

describe('Pickers', () => {
  describe('Main class picker', () => {
    test('Returns one Dewey Decimal major class', () => {
      const mainClass = mainClassPicker()

      expect(mainClass.code).toBeTruthy()
      expect(mainClass.name).toBeTruthy()
    })
  })

  describe('Division picker', () => {
    test('Returns one Dewey Decimal division', () => {
      const division = divisionPicker()

      expect(division.code).toBeTruthy()
      expect(division.name).toBeTruthy()
    })
  })

  describe('Section picker', () => {
    test('Returns one Dewey Decimal major class', () => {
      const section = sectionPicker()

      expect(section.code).toBeTruthy()
      expect(section.name).toBeTruthy()
    })
  })
})
