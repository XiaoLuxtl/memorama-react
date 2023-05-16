import Carta from '../carta'
import styles from './styles.module.css'
import crearbaraja from '../../utils/crearbaraja'
import { seGano, GameLogicContext } from '../../utils/gamelogic'

import { useState, useEffect, useContext } from 'react'

export default function Tablero () {
  const CANTIDAD = 6 // es el doble
  const { restart, tries, setTries } = useContext(GameLogicContext)

  const [baraja, setBaraja] = useState([])
  const [comparando, setComparando] = useState(false)
  const [pareja, setPareja] = useState([])

  useEffect(() => {
    setBaraja(crearbaraja(CANTIDAD))
    setPareja([])
    setTries(0)
    setComparando(false)
  }, [restart])

  function handleCarta ({ carta }) {
    if (
      comparando ||
      pareja.indexOf(carta) > -1 ||
      carta.seVolteo ||
      carta.seAdivino
    ) {
      return
    }
    carta.seVolteo = true
    setPareja([...pareja, carta])
  }

  useEffect(() => {
    if (pareja.length === 2) {
      setComparando(true)
      setTimeout(() => {
        const [primera, segunda] = pareja
        let tmpbaraja = baraja

        if (primera.icono === segunda.icono) {
          tmpbaraja = baraja.map((carta) => {
            if (carta.icono !== primera.icono) {
              return carta
            }
            return { ...carta, seAdivino: true }
          })
        } else {
          tmpbaraja = baraja.map((carta) => {
            return { ...carta, seVolteo: false }
          })

          setTries(tries + 1)
        }

        seGano(tmpbaraja)
        setBaraja(tmpbaraja)
        setPareja([])
        setComparando(false)
      }, 1000)
    }
  }, [pareja])

  return (
    <div className={styles.tablero}>
      {baraja
        ? (
            baraja.map((carta, i) => {
              return (
                <Carta
                  key={i}
                  icono={carta.icono}
                  hue={carta.hue}
                  onCartaClick={() => handleCarta({ carta })}
                  seAdivino={carta.seAdivino}
                  seVolteo={carta.seVolteo}
                />
              )
            })
          )
        : (
          <>cargando</>
          )}
    </div>
  )
}
