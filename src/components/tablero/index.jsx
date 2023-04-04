import Carta from '../carta'
import styles from './styles.module.css'
import crearbaraja from '../../utils/crearbaraja'
import seGano from '../../utils/gamelogic'
import { RestartContext } from '../../utils/gamerestart'

import { useState, useEffect, useContext } from 'react'

export default function Tablero () {
  const CANTIDAD = 6 // es el doble
  const { restart } = useContext(RestartContext)

  const [baraja, setBaraja] = useState(null)
  const [comparando, setComparando] = useState(false)
  const [pareja, setPareja] = useState([])

  useEffect(() => {
    setBaraja(crearbaraja(CANTIDAD))
    setPareja([])
    setComparando(false)
    console.log(restart)
  }, [restart])

  function handleCarta (carta) {
    if (comparando ||
       pareja.indexOf(carta) > -1 ||
       carta.seVolteo ||
       carta.seAdivino) {
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
          tmpbaraja = (baraja.map(carta => {
            if (carta.icono !== primera.icono) {
              return carta
            }
            return { ...carta, seAdivino: true }
          }))
        } else {
          tmpbaraja = (baraja.map(carta => {
            return { ...carta, seVolteo: false }
          }))
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
        ? (baraja.map((carta, i) => {
            return (
              <Carta
                key={i}
                icono={carta.icono}
                hue={carta.hue}
                onCartaClick={() => handleCarta(carta)}
                seAdivino={carta.seAdivino}
                seVolteo={carta.seVolteo}
              />
            )
          }))
        : <>cargando</>}
    </div>
  )
}
