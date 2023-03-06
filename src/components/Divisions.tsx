import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Division } from '../types/dewey'
import { divisionPickUntilSatisfied } from '../picker/division_picker'
import List from './lists/List'
import MainClassFilterContext from '../context/MainClassFilterContext'
import ListLayout from './layout/ListLayout'
import ControlBar from './controls/ControlBar'
import useCount from '../hooks/useCount'

// TODO stabilize the list on MORE/LESS
export default function Divisions () {
  const context = useContext(MainClassFilterContext)
  const [count, increment, decrement] = useCount(5)
  const [stale, setStale] = useState(1)
  const [displayDivisions, setDisplayDivisions] = useState<Division[]>([])

  const activeCodes = useMemo(() => {
    const activeFilters = Object.entries(context.filters).filter(filter => filter[1])
    return activeFilters.map(entry => entry[0])
  }, [context.filters])

  useEffect(() => {
    const filteredDivisions = divisionPickUntilSatisfied(count, (division => {
      if (activeCodes.length === 0) return true

      const divisionMainClass = division.code[0]
      return activeCodes.some(code => code.startsWith(divisionMainClass))
    }))

    setDisplayDivisions(filteredDivisions)
  }, [activeCodes, count, stale])

  function shuffleDivisions () {
    const newStale = stale * -1
    setStale(newStale)
  }

  return (
    <ListLayout header={'Divisions'}>
      <ControlBar handleUp={increment} handleDown={decrement} handleShuffle={shuffleDivisions} />
      <List display={displayDivisions}/>
    </ListLayout>
  )
}
