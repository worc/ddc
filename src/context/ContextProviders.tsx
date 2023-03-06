import React, { useState } from 'react'
import MainClassFilterContext, { defaultValue as mainClassDefaultValue } from './MainClassFilterContext'
import DivisionFilterContext, { defaultValue as divisionDefaultValue } from './DivisionFilterContext'

interface Props {

}
export default function ContextProviders (props: React.PropsWithChildren<Props>) {
  const [mainClassFilters, setMainClassFilters] = useState(mainClassDefaultValue.filters)
  const [divisionFilters, setDivisionFilters] = useState(divisionDefaultValue.filters)

  return (
    <MainClassFilterContext.Provider value={{ filters: mainClassFilters, setFilters: setMainClassFilters }}>
      <DivisionFilterContext.Provider value={{ filters: divisionFilters, setFilters: setDivisionFilters }}>
        { props.children }
      </DivisionFilterContext.Provider>
    </MainClassFilterContext.Provider>
  )
}
