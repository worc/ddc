import React, { useContext } from 'react'
import MainClassFilterContext from './context/MainClassFilterContext'
import DivisionFilterContext from './context/DivisionFilterContext'

export default function Debug () {
  const { filters: mainFilters } = useContext(MainClassFilterContext)
  const { filters: divisionFilters } = useContext(DivisionFilterContext)

  return (
    <>
      <pre>{ JSON.stringify(mainFilters, null, 2)}</pre>
      <pre>{ JSON.stringify(divisionFilters, null, 2)}</pre>
    </>
  )
}
