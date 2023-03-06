import React, { useMemo, useState } from 'react'
import { sectionPicker } from '../picker/_picker'
import List from './lists/List'
import ListLayout from './layout/ListLayout'
import useCount from '../hooks/useCount'
import ControlBar from './controls/ControlBar'

export default function Sections () {
  const [count, increment, decrement] = useCount(5)
  const [stale, setStale] = useState(1)

  const sections = useMemo(() => {
    return sectionPicker(count)
  }, [count, stale])

  function handleShuffle () {
    const newStale = stale * -1
    setStale(newStale)
  }

  return (
    <ListLayout header={'Sections'}>
      <ControlBar handleUp={increment} handleDown={decrement} handleShuffle={handleShuffle}/>
      <List display={sections}/>
    </ListLayout>
  )
}
