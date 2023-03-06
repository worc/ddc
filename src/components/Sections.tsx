import React, { useContext, useEffect, useMemo } from 'react'
import ControlBar from './controls/ControlBar'
import List from './lists/List'
import ListLayout from './layout/ListLayout'
import MainClassFilterContext from '../context/MainClassFilterContext'
import { Section } from '../types/dewey'
import { Sections as sections } from '../const/Section'
import useFilteredEntries from '../hooks/useFilteredEntries'
import DivisionFilterContext from '../context/DivisionFilterContext'

export default function Sections () {
  const { filters: mainFilters } = useContext(MainClassFilterContext)
  const { filters: divisionFilters } = useContext(DivisionFilterContext)

  const validSections = useMemo(() => {
    return sections.filter(item => {
      const sectionMainClass = item.code[0]
      const sectionDivision = `${item.code[0]}${item.code[1]}`

      const inMain = mainFilters.some(filter => filter.code.startsWith(sectionMainClass))
      const inDivision = divisionFilters.some(filter => filter.code.startsWith(sectionDivision))

      if (mainFilters.length && !divisionFilters.length) {
        return inMain
      } else if (!mainFilters.length && divisionFilters.length) {
        return inDivision
      } else if (mainFilters.length && divisionFilters.length) {
        return inMain && inDivision
      } else {
        return true
      }
    })
  }, [mainFilters, divisionFilters])

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
