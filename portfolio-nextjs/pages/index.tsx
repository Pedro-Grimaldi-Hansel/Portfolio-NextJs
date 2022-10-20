import type { NextPage } from 'next'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <> 
      <Navbar/>
      <div className={styles.Home}>
        
      </div>
    </>
    
  )
}

export default Home
