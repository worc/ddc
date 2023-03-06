import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'

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
  </React.Fragment>
  , document.getElementById('app')
)
