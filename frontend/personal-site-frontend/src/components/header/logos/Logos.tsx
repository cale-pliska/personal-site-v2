import styles from './Logos.module.css'

import reactLogo from '../../../assets/react.svg'
import viteLogo from '/vite.svg'

function Logos () {
  return (
    <div className={styles.logoBlocks}>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className={styles.logo} alt='Vite logo' />
        </a>
      </div>
      <div>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.react}`}
            alt='React logo'
          />
        </a>
      </div>
    </div>
  )
}

export default Logos
