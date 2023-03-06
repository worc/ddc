import { useState } from 'react'

type useCount = (initialCount: number) => [number, () => void, () => void]
export default function useCount(initialCount = 0): ReturnType<useCount> {
  const [count, setCount] = useState(initialCount)

  function increment () {
    const newCount = count + 1
    setCount(newCount)
  }
  function decrement () {
    const newCount = Math.max(0, count - 1)
    setCount(newCount)
  }

  return [count, increment, decrement]
}
