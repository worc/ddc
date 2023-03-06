import React, { useContext, useEffect, useMemo } from 'react'
import ControlBar from './controls/ControlBar'
import List from './lists/List'
import ListLayout from './layout/ListLayout'
import MainClassFilterContext from '../context/MainClassFilterContext'
import { Section } from '../types/dewey'
import { Sections as sections } from '../const/Section'
import useFilteredEntries from '../hooks/useFilteredEntries'

export default function Sections () {
  const context = useContext(MainClassFilterContext)

  const activeCodes = useMemo(() => {
    const activeFilters = Object.entries(context.filters).filter(filter => filter[1])
    return activeFilters.map(entry => entry[0])
  }, [context.filters])

  const validSections = useMemo(() => {
    return sections.filter(item => {
      if (activeCodes.length === 0) return true

      const sectionMainClass = item.code[0]
      return activeCodes.some(code => code.startsWith(sectionMainClass))
    })
  }, [activeCodes])

  const [displaySections, setFilters, increment, decrement, shuffle] = useFilteredEntries<Section>(sections, validSections, 5)

  useEffect(() => {
    setFilters(validSections)
  }, [validSections])

  return (
    <ListLayout header={'Sections'}>
      <ControlBar handleUp={increment} handleDown={decrement} handleShuffle={shuffle}/>
      <List display={displaySections}/>
    </ListLayout>
  )
}
