import { createContext, useState } from 'react'

export function seGano (baraja) {
  const test = baraja.filter(carta => !carta.seAdivino)
  if (test.length === 0) {
    alert('Ganaste!')
  }
}

export const GameLogicContext = createContext()

export function GameLogicProvider ({ children }) {
  const [restart, setRestart] = useState(false)
  const [tries, setTries] = useState(0)

  return (
    <GameLogicContext.Provider value={{
      restart,
      tries,
      setRestart,
      setTries
    }}
    >
      {children}
    </GameLogicContext.Provider>
  )
}
