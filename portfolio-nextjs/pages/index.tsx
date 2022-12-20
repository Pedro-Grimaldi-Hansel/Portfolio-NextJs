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
import ts from '../public/Images/typescript-original.svg'
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
                      <a href="https://github.com/Pedro-Grimaldi-Hansel" target="_blank" rel="noreferrer"><Image alt='icone ' src={foto}/></a>
                  </div>

                  <div className={styles.Texto_de_introducao}>
                  <h1>Pedro <span>Grimaldi Hansel</span></h1>
                      <h2>Estudante de Graduação em <a href="https://www2.ufjf.br/ufjf/ensino/graduacao/ciencias-exatas/" target="_blank"
                      rel="noreferrer">Ciencias Exatas</a> e <a href="https://www.ufjf.br/cursocomputacao/" target="_blank" rel="noreferrer"
                      >Ciencias da Computação</a> (UFJF).</h2>
                      <h2>Desenvolvedor, Gerente de Projetos e Conselheiro Multiplicador na  
                      <a href="https://www.instagram.com/codejr/"target="_blank" rel="noreferrer"> Code Empresa Jr de computação.</a></h2>
                  </div>
        </section>
        <section className={styles.Home_bottom}>
              
            <Image alt='icone ' src={git}/>
            <Image alt='icone ' src={c}/>
            <Image alt='icone ' src={html}/>
            <Image alt='icone ' src={css}/>
            <Image alt='icone ' src={js}/>
            <Image alt='icone ' src={ts}/>
            <Image alt='icone ' src={react}/>
            <Image alt='icone ' src={node}/>
            <Image alt='icone ' src={next}/>

        </section>
      </section>
    </>
    
  )
}

export default Home
