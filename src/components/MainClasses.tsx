import React from 'react'
import styled from 'styled-components'
import { MainClassList } from './lists'
import ListLayout from './layout/ListLayout'

export default function MainClasses () {
  return (
    <ListLayout header={'Main Classes'}>
      <MainClassList/>
    </ListLayout>
  )
}
