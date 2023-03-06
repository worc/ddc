import React, { useContext } from 'react'
import styled from 'styled-components'

import { DeweyClass } from '../../types/dewey'
import MainClassFilterContext from '../../context/MainClassFilterContext'

interface Props {
  item: DeweyClass
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  isMainClass?: boolean
}
export default function Entry ({ item, handleClick, isMainClass = false }: Props) {
  const { filters } = useContext(MainClassFilterContext)

  const isActive = filters.some(filter => (filter.code === item.code && filter.name === item.name))

  return (
    <Container
      data-code={item.code}
      data-name={item.name}
      className={isActive && isMainClass ? 'filter-on' : ''}
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