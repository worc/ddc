import React from 'react'
import styled from 'styled-components'
import { DeweyClass } from '../../types/dewey'
import Entry from './Entry'

interface Props {
  display: DeweyClass[]
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  isMainClass?: boolean
}

export default function List ({ display, handleClick, isMainClass = false }: Props) {
  return (
    <Container>
      { display.map(item => (
        <Entry item={item} handleClick={handleClick} isMainClass={isMainClass}/>
      ))
      }
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid #bad;
`
