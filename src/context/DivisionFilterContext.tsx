import React from 'react'
import { Division } from '../types/dewey'

interface IDivisionFilterContext {
  filters: Division[]
  setFilters: (newFilters: Division[]) => void
}

export const defaultValue: IDivisionFilterContext = {
  filters: [],
  setFilters: () => null,
}

const DivisionFilterContext = React.createContext<IDivisionFilterContext>(defaultValue)

export default DivisionFilterContext
