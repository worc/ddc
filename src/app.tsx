import React from 'react'
import ContextProviders from './context/ContextProviders'
import MainClasses from './components/MainClasses'
import Divisions from './components/Divisions'
import Sections from './components/Sections'
import Debug from './debug'

export default function App () {
  return (
    <ContextProviders>
      <MainClasses/>
      <Divisions/>
      <Sections/>
      <Debug/>
    </ContextProviders>
  )
}
