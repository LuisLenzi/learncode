import { createContext } from 'react'

type ContextProps = {
  buyData: object
  buyState: boolean
  handleSetBuyStateAndData: (state: boolean, buy?: object) => void
}
export const Context = createContext({} as ContextProps)
