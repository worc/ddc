import React from 'react'
import styled from 'styled-components'
import { IControlProps } from './IControlProps'

export default function More ({ handleClick }: IControlProps) {
  return (
    <button onClick={handleClick}>More</button>
  )
}
