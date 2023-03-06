import React from 'react'
import { divisionPicker } from '../picker/_picker'

export default function Divisions () {
  const divisions = divisionPicker(15)

  return (
    <>
      { divisions.map(division => (
        <div>
          <div>{ division.code } | { division.name }</div>
        </div>
      ))
      }
    </>
  )
}