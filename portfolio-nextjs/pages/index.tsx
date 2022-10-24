import type { NextPage } from 'next'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <> 
      <Navbar/>
      <hr/>
      <section className={styles.Home}>
      <div className={styles.foto_de_perfil}>
                    <a href="https://github.com/Pedro-Grimaldi-Hansel" target="_blank"></a>
                </div>
      </section>
    </>
    
  )
}

export default Home
