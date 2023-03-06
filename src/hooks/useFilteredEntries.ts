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
  priority: T[],
  initialFilters: T[],
  initialCount: number
) => [T[], SetFilters<T>, Increment, Decrement, Shuffle]

export default function useFilteredEntries<T extends DeweyClass>(...args: Parameters<useFilteredEntries<T>>): ReturnType<useFilteredEntries<T>> {
  const [list, priority, initialFilters, initialCount] = args
  const [filters, setFilters] = useState(initialFilters)
  const [count, increment, decrement] = useCount(initialCount)
  const [stale, setStale] = useState(1)

  const filteredList = useMemo(() => {
    // TODO FIX, i don't think filters are supposed to be zero now
    if (filters.length === 0) {
      return pickUntilSatisfied<T>(list, count, () => true)
    } else {
      const withoutPriority = list.filter(item => {
        return !priority.some(pItem => shallowCompare(pItem, item))
      })
      return [...priority, ...pickUntilSatisfied<T>(withoutPriority, count, item => {
        return filters.some(filter => shallowCompare(filter, item))
      })]
    }
  }, [list, priority, count, filters, stale])

  function shuffle () {
    const newStale = stale * -1
    setStale(newStale)
  }

  return [filteredList, setFilters, increment, decrement, shuffle]
}