import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Division } from '../types/dewey'
import { divisionPickUntilSatisfied } from '../picker/division_picker'
import List from './lists/List'
import MainClassFilterContext from '../context/MainClassFilterContext'

export default function Divisions () {
  const context = useContext(MainClassFilterContext)
  const [count, setCount] = useState(5)
  const [displayDivisions, setDisplayDivisions] = useState<Division[]>([])

  const activeCodes = useMemo(() => {
    const activeFilters = Object.entries(context.filters).filter(filter => filter[1])
    return activeFilters.map(entry => entry[0])
  }, [context.filters])

  useEffect(() => {
    const filteredDivisions = divisionPickUntilSatisfied(count, (division => {
      const divisionMainClass = division.code[0]
      return activeCodes.some(code => code.startsWith(divisionMainClass))
    }))

    setDisplayDivisions(filteredDivisions)
  }, [activeCodes, count])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const count = parseInt(event.target.value, 10)
    setCount(count)
  }

  return (
    <>
      <h2>Divisions</h2>
      <div><label><input type="number" value={count} onChange={handleChange}/>count</label></div>
      <List display={displayDivisions}/>
    </>
  )
}
