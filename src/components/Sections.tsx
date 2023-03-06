import React from 'react'
import { sectionPicker } from '../picker/_picker'

export default function Sections () {
  const sections = sectionPicker(10)

  return (
    <>
      { sections.map(section => (
        <div>
          <div>{ section.code } | { section.name }</div>
        </div>
      ))
      }
    </>
  )
}