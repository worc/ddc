import React from 'react'
import styled from 'styled-components'
import More from './More'
import Less from './Less'
import Shuffle from './Shuffle'
import { IControlProps } from './IControlProps'

interface Props {
  handleUp: IControlProps['handleClick']
  handleDown: IControlProps['handleClick']
  handleShuffle: IControlProps['handleClick']
}

export default function ControlBar ({ ...args }: Props) {
  const { handleUp, handleDown, handleShuffle } = args

  return (
    <Container>
      <More handleClick={handleUp}/>
      <Less handleClick={handleDown}></Less>
      <Shuffle handleClick={handleShuffle}/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  
  & > button {
    background: #047695;
    color: white;
    font-variant-caps: all-small-caps;
    font-weight: bold;
    flex: 1 0 auto;
    height: 32px;
    letter-spacing: 0.2rem;
  }
`
