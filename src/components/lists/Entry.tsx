import React, { useContext } from 'react'
import styled from 'styled-components'

import { DeweyClass } from '../../types/dewey'
import MainClassFilterContext from '../../context/MainClassFilterContext'

interface Props {
  item: DeweyClass
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}
export default function Entry ({ item, handleClick }: Props) {
  const context = useContext(MainClassFilterContext)

  const activeFilters = Object.entries(context.filters).filter(filter => filter[1])
  const activeCodes = activeFilters.map(entry => entry[0])

  return (
    <Container
      data-code={item.code}
      className={(activeCodes.includes(item.code)) ? 'filter-on' : ''}
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
  border: 1px solid #ace;
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  
  &:hover {
    border: 1px solid green;
  }
  
  &:active {
    border: 1px solid red;
  }
  
  &.filter-on {
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