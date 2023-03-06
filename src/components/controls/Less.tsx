import React from 'react'
import styled from 'styled-components'
import { IControlProps } from './IControlProps'

export default function Less ({ handleClick }: IControlProps) {
  return (
    <button onClick={handleClick}>Less</button>
  )
}
