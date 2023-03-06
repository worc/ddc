import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import MainClasses from './components/MainClasses'
import Divisions from './components/Divisions'
import Sections from './components/Sections'

const GlobalStyle = createGlobalStyle`
    #app {
        font-family: "Rokkitt", serif;
        font-size: 16px;
    }
    
    h1 {
        font-size: 40px;
    }
    
    h2 {
        font-size: 32px;
    }
`
render(
  <React.Fragment>
    <GlobalStyle/>
    <Header/>
    <MainClasses/>
    <hr/>
    <Divisions/>
    <hr/>
    <Sections/>
  </React.Fragment>
  , document.getElementById('app')
)
