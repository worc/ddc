import React from 'react'
import { mainClassPicker } from '../picker/_picker'

export default function MainClasses () {
  const mainClasses = mainClassPicker(12)

  return (
    <>
      { mainClasses.map(mainClass => (
        <div>
          <div>{ mainClass.code } | { mainClass.name }</div>
        </div>
      ))
      }
    </>
  )
}
