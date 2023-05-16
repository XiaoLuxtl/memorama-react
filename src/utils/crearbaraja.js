import shuffle from './FYShuffle'

const CARITAS = [
  '👻', '👽', '😺', '🐱‍👤', '🐵', '🐶',
  '🐺', '🐱', '🦁', '🐯', '🦒', '🦊',
  '🦝', '🐮', '🐷', '🐗', '🐭', '🐹',
  '🐰', '🐻', '🐨', '🐼', '🐸', '🦓',
  '🐴', '🦄', '🐔', '🐲'
]

export default function crearbaraja ({ nCartas = 5 }) {
  const cartas = []

  if (nCartas > CARITAS.length - 1) nCartas = CARITAS.length - 1

  for (let n = 0; n < nCartas; n++) {
    const index = Math.floor(Math.random() * CARITAS.length)
    const carta = {
      icono: CARITAS.splice(index, 1)[0],
      hue: Math.floor(Math.random() * 254),
      seAdivino: false,
      seVolteo: false
    }

    cartas.push(carta)
    cartas.push({ ...carta })
  }

  return shuffle(cartas)
  // return new Promise((resolve) => resolve(
  //   cartas
  // ))
}
