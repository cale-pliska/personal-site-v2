import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navLink}>Home</a>
      <a href="/about" className={styles.navLink}>About</a>
      <a href="/contact" className={styles.navLink}>Contact</a>
      <a href="/contact" className={styles.navLink}>Contact</a>
      <a href="/contact" className={styles.navLink}>Contact</a>
      <a href="/contact" className={styles.navLink}>Contact</a>
      <a href="/contact" className={styles.navLink}>Contact</a>               
    </nav>
  )
}

export default Navbar