import React from 'react'
import styled from 'styled-components'
import ContextProviders from './context/ContextProviders'
import MainClasses from './components/MainClasses'
import Divisions from './components/Divisions'
import Sections from './components/Sections'
// import Debug from './debug'

export default function App () {
  return (
    <ContextProviders>
      <Container>
        <Sections/>
        <Divisions/>
        <MainClasses/>
        {/*<Debug/>*/}
      </Container>
    </ContextProviders>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  
  & > *:not(:last-child) {
    border-bottom: 4px dotted black;
  }
`
