import styles from './Landing.module.css'
import caleHeadshot from '../../../assets/cale-headshot.jpg'

function Landing () {
  return (
    <>
      <h1>Hi! This is my website.</h1>
      <div>
        <img className= {styles.img} src={caleHeadshot} alt='Headshot of Cale' />
      </div>
    </>
  )
}

export default Landing
