import styles from './styles.module.css'
import { useContext } from 'react'
import { RestartContext } from '../../utils/gamerestart'

export default function Header () {
  const { setRestart } = useContext(RestartContext)

  function handleClick () {
    setRestart((restart) => !restart)
  }

  return (
    <header className={styles.gheader}>
      <div>
        <h1>
          Memorama
        </h1>
        <button onClick={handleClick}>
          Reiniciar
        </button>
      </div>

      {/* <div>
        <h4>
          Intentos:
        </h4>
      </div> */}
    </header>
  )
}
