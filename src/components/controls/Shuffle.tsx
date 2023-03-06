import React from 'react'
import styled from 'styled-components'
import { IControlProps } from './IControlProps'

export default function Shuffle ({ handleClick }: IControlProps) {
  return (
    <button onClick={handleClick}>Shuffle</button>
  )
}
