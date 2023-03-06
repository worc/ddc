import React, { useContext, useEffect, useMemo } from 'react'
import ControlBar from './controls/ControlBar'
import { DivisionList } from './lists/'
import { Divisions as divisions } from '../const/Division'
import ListLayout from './layout/ListLayout'
import MainClassFilterContext from '../context/MainClassFilterContext'
import useFilteredEntries from '../hooks/useFilteredEntries'

// TODO stabilize the list on MORE/LESS
export default function Divisions () {
  const { filters } = useContext(MainClassFilterContext)

  const validDivisions = useMemo(() => {
    return divisions.filter(item => {
      if (filters.length === 0) return true

      const divisionMainClass = item.code[0]
      return filters.some(filter => filter.code.startsWith(divisionMainClass))
    })
  }, [filters])

  const [displayDivisions, setFilters, increment, decrement, shuffle] = useFilteredEntries(divisions, validDivisions, 5)

  useEffect(() => {
    setFilters(validDivisions)
  }, [validDivisions])

  return (
    <ListLayout header={'Divisions'}>
      <ControlBar handleUp={increment} handleDown={decrement} handleShuffle={shuffle} />
      <DivisionList list={displayDivisions}/>
    </ListLayout>
  )
}
