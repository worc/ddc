import React from 'react'
import { MainClass } from '../types/dewey'

interface IMainClassFilterContext {
  filters: MainClass[]
  setFilters: (newFilters: MainClass[]) => void
}

export const defaultValue: IMainClassFilterContext = {
  filters: [],
  setFilters: () => null,
}

const MainClassFilterContext = React.createContext<IMainClassFilterContext>(defaultValue)

export default MainClassFilterContext
