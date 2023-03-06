import React, { useContext } from 'react'
import List from './List'
import { MainClass, MainClassCode, MainClassName } from '../../types/dewey'
import MainClassFilterContext from '../../context/MainClassFilterContext'
import { mainClassList } from '../../const/MainClass'

export default function MainClassList () {
  const context = useContext(MainClassFilterContext)

  function handleClick (event: React.MouseEvent<HTMLDivElement>) {
    const code = event.currentTarget.dataset.code as MainClassCode
    const name = event.currentTarget.dataset.name as MainClassName

    const filter: MainClass = {
      code,
      name,
    }

    const inFilters = context.filters.some(filter => filter.code === code)

    if (inFilters) {
      const newFilters = context.filters.filter(filter => filter.code !== code)
      context.setFilters([...newFilters])
    } else {
      const newFilters = context.filters.concat(filter)
      context.setFilters([...newFilters])
    }
  }

  return (
    <List display={mainClassList} handleClick={handleClick} isMainClass/>
  )
}
