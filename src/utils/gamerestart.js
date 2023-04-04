import { createContext } from 'react'

export const RestartContext = createContext({
  restart: false,
  setRestart: () => {}
})

export default RestartContext
