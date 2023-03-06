import React, { useState } from 'react'
import { sectionPicker } from '../picker/_picker'
import List from './lists/List'
import ListLayout from './layout/ListLayout'

export default function Sections () {
  const [count, setCount] = useState(5)

  const sections = sectionPicker(count)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const count = parseInt(event.target.value, 10)
    setCount(count)
  }

  return (
    <ListLayout header={'Sections'}>
      <div><label><input type="number" value={count} onChange={handleChange}/>count</label></div>
      <List display={sections}/>
    </ListLayout>
  )
}
