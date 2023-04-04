
export default function seGano (baraja) {
  const test = baraja.filter(carta => !carta.seAdivino)
  if (test.length === 0) {
    alert('Ganaste!')
  }
}
