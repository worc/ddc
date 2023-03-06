import React from 'react'
import styled from 'styled-components'
import { DeweyClass } from '../../types/dewey'
import Entry from './Entry'

interface Props {
  display: DeweyClass[]
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export default function List ({ display, handleClick }: Props) {
  return (
    <Container>
      { display.map(item => (
        <Entry item={item} handleClick={handleClick}/>
      ))
      }
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid #bad;
`
