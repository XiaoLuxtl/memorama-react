import './App.css'
import Header from './components/header'
import Tablero from './components/tablero'
import { GameLogicProvider } from './utils/gamelogic'

function App () {
  return (
    <>
      <GameLogicProvider>
        <Header />
        <Tablero />
      </GameLogicProvider>
    </>
  )
}

export default App
