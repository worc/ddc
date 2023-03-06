import React, { useContext } from 'react'
import List from './List'
import { MainClassCode } from '../../types/dewey'
import MainClassFilterContext from '../../context/MainClassFilterContext'
import { mainClassList } from '../../const/MainClass'

export default function MainClassList () {
  const context = useContext(MainClassFilterContext)

  function handleClick (event: React.MouseEvent<HTMLDivElement>) {
    const code = event.currentTarget.dataset.code

    if (code) {
      context.setFilters({
        [code]: !context.filters[code as MainClassCode]
      })
    }
  }

  return (
    <List display={mainClassList} handleClick={handleClick}/>
  )
}
