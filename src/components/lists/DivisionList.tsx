import React, { useContext } from 'react'
import List from './List'
import { Division } from '../../types/dewey'
import DivisionFilterContext from '../../context/DivisionFilterContext'

interface Props {
  list: Division[]
}

export default function DivisionList ({ list }: Props) {
  const { filters, setFilters } = useContext(DivisionFilterContext)

  function handleClick (event: React.MouseEvent<HTMLDivElement>) {
    const code = event.currentTarget.dataset.code as string
    const name = event.currentTarget.dataset.name as string

    const filter: Division = {
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
    <List display={list} handleClick={handleClick} isDivision/>
  )
}