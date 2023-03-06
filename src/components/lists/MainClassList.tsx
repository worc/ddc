import React, { useContext } from 'react'
import List from './List'
import { MainClass, MainClassCode, MainClassName } from '../../types/dewey'
import MainClassFilterContext from '../../context/MainClassFilterContext'
import { mainClassList } from '../../const/MainClass'

export default function MainClassList () {
  const { filters, setFilters } = useContext(MainClassFilterContext)

  function handleClick (event: React.MouseEvent<HTMLDivElement>) {
    const code = event.currentTarget.dataset.code as MainClassCode
    const name = event.currentTarget.dataset.name as MainClassName

    const filter: MainClass = {
      code,
      name,
    }

    const inFilters = filters.some(filter => filter.code === code && filter.name === name)

    if (inFilters) {
      const newFilters = filters.filter(filter => filter.code !== code)
      setFilters([...newFilters])
    } else {
      const newFilters = filters.concat(filter)
      setFilters([...newFilters])
    }
  }

  return (
    <List display={mainClassList} handleClick={handleClick} isMainClass/>
  )
}
