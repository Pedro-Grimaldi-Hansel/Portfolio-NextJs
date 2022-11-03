import type { NextPage } from 'next'
import Navbar from '../components/NavBar'
import styles from '../styles/index.module.scss'
import Image from "next/image";
import foto from '../public/Images/Pedro.jpg'
//imports dos icones do devicons

import git from '../public/Images/git-original.svg'
import c from '../public/Images/c-original.svg'
import cplusplus from '../public/Images/cplusplus-original.svg'
import html from '../public/Images/html5-original.svg'
import css from '../public/Images/css3-original.svg'
import js from '../public/Images/javascript-original.svg'
import react from '../public/Images/react-original-wordmark.svg'
import node from '../public/Images/nodejs-original.svg'
import next from '../public/Images/nextjs-original-wordmark.svg'


const Home: NextPage = () => {
  return (
    <> 
      <Navbar/>
      <hr/>
      <section className={styles.Home}>
        <section className={styles.Home_top}>
                  <div className={styles.foto_de_perfil}>
                      <a href="https://github.com/Pedro-Grimaldi-Hansel" target="_blank"><Image src={foto}/></a>
                  </div>

                  <div className={styles.Texto_de_introducao}>
                  <h1>Pedro <span>Grimaldi Hansel</span></h1>
                      <h2>Estudante de Graduação em <a href="https://www2.ufjf.br/ufjf/ensino/graduacao/ciencias-exatas/" target="_blank"
                      >Ciencias Exatas</a> e <a href="https://www.ufjf.br/cursocomputacao/" target="_blank"
                      >Ciencias da Computação</a> (UFJF).</h2>
                      <h2>Projetista, acessor do departamento comercial e departamentos projetos na  
                      <a href="https://www.instagram.com/codejr/"target="_blank"> Code Empresa Jr de computação.</a></h2>
                  </div>
        </section>
        <section className={styles.Home_bottom}>
              
            <Image src={git}/>
            <Image src={c}/>
            <Image src={cplusplus}/>
            <Image src={html}/>
            <Image src={css}/>
            <Image src={js}/>
            <Image src={react}/>
            <Image src={node}/>
            <Image src={next}/>

        </section>
      </section>
    </>
    
  )
}

export default Home
