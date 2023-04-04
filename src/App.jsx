import './App.css'
import { useState } from 'react'
import Header from './components/header'
import Tablero from './components/tablero'
import RestartContext from './utils/gamerestart'

function App () {
  const [restart, setRestart] = useState(0)

  return (
    <>
      <RestartContext.Provider value={{ restart, setRestart }}>
        <Header />
        <Tablero />
      </RestartContext.Provider>
    </>
  )
}

export default App
