import React, { useContext } from 'react'
import styled from 'styled-components'

import { DeweyClass } from '../../types/dewey'
import MainClassFilterContext from '../../context/MainClassFilterContext'
import DivisionFilterContext from '../../context/DivisionFilterContext'

interface Props {
  item: DeweyClass
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  isMainClass?: boolean
  isDivision?: boolean
}
export default function Entry ({ item, handleClick, isMainClass = false, isDivision = false }: Props) {
  const { filters: mainFilters } = useContext(MainClassFilterContext)
  const { filters: divisionFilters } = useContext(DivisionFilterContext)

  const isActive = isMainClass && mainFilters.some(filter => (filter.code === item.code && filter.name === item.name)) || isDivision && divisionFilters.some(filter => (filter.code === item.code && filter.name === item.name))

  return (
    <Container
      data-code={item.code}
      data-name={item.name}
      className={isActive ? 'filter-on' : ''}
      key={`${item.code}_${item.name}`}
      onClick={handleClick}
    >
      <Code>{ item.code }</Code>
      <Name>{ item.name }</Name>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  border: 1px solid #fff;
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  
  &:hover {
    border: 1px solid #00a2bd;
  }
  
  &:active {
    box-shadow: inset 0 0 6px #00a2bd;
  }
  
  &.filter-on {
    background: #00a2bd;
    color: white;
    font-style: italic;
    font-weight: bold;
  }
`

const Code = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  padding-left: 4px;
`

const Name = styled.div`
  font-size: 0.9rem;
  position: relative;
  top: 2px;
`