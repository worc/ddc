import React, { useContext, useEffect, useMemo } from 'react'
import ControlBar from './controls/ControlBar'
import { DivisionList } from './lists/'
import { Divisions as divisions } from '../const/Division'
import ListLayout from './layout/ListLayout'
import MainClassFilterContext from '../context/MainClassFilterContext'
import useFilteredEntries from '../hooks/useFilteredEntries'
import DivisionFilterContext from '../context/DivisionFilterContext'

// TODO stabilize the list on MORE/LESS
export default function Divisions () {
  const { filters: mainFilters } = useContext(MainClassFilterContext)
  const { filters: divisionFilters } = useContext(DivisionFilterContext)

  const validDivisions = useMemo(() => {
    return divisions.filter(item => {
      if (mainFilters.length === 0) return true

      const divisionMainClass = item.code[0]
      return mainFilters.some(filter => filter.code.startsWith(divisionMainClass))
    })
  }, [mainFilters, divisionFilters])

  const [displayDivisions, setFilters, increment, decrement, shuffle] = useFilteredEntries(divisions, divisionFilters, validDivisions, 5)

  useEffect(() => {
    setFilters(validDivisions)
  }, [validDivisions])

  return (
    <div>
      <ListLayout header={'Divisions'}>
        <DivisionList list={displayDivisions}/>
      </ListLayout>
      <ControlBar handleUp={increment} handleDown={decrement} handleShuffle={shuffle} />
    </div>
  )
}
