import type { NextPage } from 'next'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <> 
      <Navbar/>
      <hr/>
      <div className={styles.Home}>
        
      </div>
    </>
    
  )
}

export default Home
