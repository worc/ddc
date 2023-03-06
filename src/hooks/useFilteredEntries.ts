import { useMemo, useState } from 'react'
import { DeweyClass } from '../types/dewey'
import shallowCompare from '../util/shallowCompare'
import useCount from './useCount'
import { pickUntilSatisfied } from '../util/pickFromGenerator'

type SideEffect = () => void

type Increment = SideEffect
type Decrement = SideEffect
type Shuffle = SideEffect

type SetFilters<T> = (arg0: T[]) => void

type useFilteredEntries<T> = (
  list: T[],
  initialFilters: T[],
  initialCount: number
) => [T[], SetFilters<T>, Increment, Decrement, Shuffle]

export default function useFilteredEntries<T extends DeweyClass>(...args: Parameters<useFilteredEntries<T>>): ReturnType<useFilteredEntries<T>> {
  const [list, initialFilters, initialCount] = args
  const [filters, setFilters] = useState(initialFilters)
  const [count, increment, decrement] = useCount(initialCount)
  const [stale, setStale] = useState(1)

  const filteredList = useMemo(() => {
    if (filters.length === 0) {
      return pickUntilSatisfied<T>(list, count, () => true)
    } else {
      return pickUntilSatisfied<T>(list, count, item => {
        return filters.some(filter => shallowCompare(filter, item))
      })
    }
  }, [count, filters, stale])

  function shuffle () {
    const newStale = stale * -1
    setStale(newStale)
  }

  return [filteredList, setFilters, increment, decrement, shuffle]
}