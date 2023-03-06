import React, { useState } from 'react'
import MainClassFilterContext, { defaultValue, IMainClassFilterContext } from './context/MainClassFilterContext'
import MainClasses from './components/MainClasses'
import Divisions from './components/Divisions'
import Sections from './components/Sections'

export default function App () {
  const [mainClassFilters, setMainClassFilters] = useState(defaultValue.filters)

  function setFilters (...args: Parameters<IMainClassFilterContext['setFilters']>) {
    const [filters] = args

    setMainClassFilters({
      ...mainClassFilters,
      ...filters,
    })
  }

  return (
    <MainClassFilterContext.Provider value={{ filters: mainClassFilters, setFilters }}>
      <MainClasses/>
      <hr/>
      <Divisions/>
      <hr/>
      <Sections/>
      <pre>{ JSON.stringify(mainClassFilters, null, 2)}</pre>
    </MainClassFilterContext.Provider>
  )
}
