import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './app'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Rokkitt", serif;
    font-size: 16px;
  }
  
  html, body {
    margin: 0
  }

  h1, h2, h3 {
    border: 1px solid red;
    text-align: center;
    margin: 0;
  }

  h1 {
    font-size: 3.0rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.0rem;
  }
`
render(
  <React.Fragment>
    <GlobalStyle/>
    <App/>
  </React.Fragment>
  , document.getElementById('app')
)
