import { GameLogicContext } from '../../utils/gamelogic'
import styles from './styles.module.css'
import { useContext } from 'react'

export default function Header () {
  const { restart, setRestart, tries } = useContext(GameLogicContext)

  function handleClick () {
    setRestart(!restart)
  }

  return (
    <header className={styles.gheader}>

      <h1>
        Memorama
      </h1>
      <div className={styles.gheaderlogic}>
        <div>
          <button onClick={handleClick}>
            Reiniciar
          </button>
        </div>
        <div>
          <h4>
            Intentos: {tries}
          </h4>
        </div>
      </div>

    </header>
  )
}
