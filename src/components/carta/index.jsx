import styles from './styles.module.css'

export default function Carta ({
  icono = '😁',
  hue = 0,
  onCartaClick,
  seAdivino,
  seVolteo
}) {
  return (
    <div className={styles.carta} onClick={onCartaClick}>
      <label>
        {/* {seVolteo
          ? <input type='checkbox' defaultChecked disabled />
          : <input type='checkbox' defaultChecked={seVolteo} />} */}
        <input type='checkbox' checked={seVolteo} readOnly />

        {seAdivino && <input type='checkbox' defaultChecked disabled />}

        <div className={styles.card}>
          <div className={styles.front} />
          <div
            className={styles.back}
            style={{ background: `hsl(${hue}, 100%, 90%)` }}
          >
            {icono}
          </div>
        </div>
      </label>
    </div>
  )
}
