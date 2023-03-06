import React from 'react'
import { MainClassCode } from '../types/dewey'

type MainClassFilterMap = Record<MainClassCode, boolean>

export interface IMainClassFilterContext {
  filters: MainClassFilterMap
  setFilters: (newFilters: Partial<MainClassFilterMap>) => void
}

export const defaultValue: IMainClassFilterContext = {
  filters: {
    '000': false,
    '100': false,
    '200': false,
    '300': false,
    '400': false,
    '500': false,
    '600': false,
    '700': false,
    '800': false,
    '900': false
  },
  setFilters: () => null
}

const MainClassFilterContext = React.createContext<IMainClassFilterContext>(defaultValue)

export default MainClassFilterContext
