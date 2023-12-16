import styles from "./Header.module.css"

import Logos from "./logos/Logos"
import Navbar from "./navbar/Navbar"

function Header () {
  return (
    <header className={styles.header}>
      <div>
        <Logos />
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header
