import type { NextPage } from 'next'
import Navbar from '../components/NavBar'
import styles from '../styles/index.module.scss'
import Image from "next/image";
import foto from '../styles/Images/Pedro.jpg'

const Home: NextPage = () => {
  return (
    <> 
      <Navbar/>
      <hr/>
      <section className={styles.Home}>
      <div className={styles.foto_de_perfil}>
                    <a href="https://github.com/Pedro-Grimaldi-Hansel" target="_blank"><Image src={foto}/></a>
                </div>
      </section>
    </>
    
  )
}

export default Home
