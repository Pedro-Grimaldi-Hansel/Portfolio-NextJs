import type { NextPage } from 'next'
import CardSkills from '../components/CardSkills'
import Navbar from '../components/NavBar'
import VoltarAoInicio from '../components/VoltarAoInicio'
import styles from '../styles/Skills.module.scss'

const Skills = () => {
  return (  
    <>
        <Navbar/>
        <hr/>
        <section className={styles.Skills}>
          
          <div className={styles.Cards}>
            <CardSkills skill='HTML / CSS' 
            texto='Capacidade de desenvolver projetos Front-end usando as linguagens HTML e CSS e uso de frameworks como por exemplo Bootstrap.'
            />
          </div> 

          <div className={styles.Cards}>
            <CardSkills skill='JavaScript' 
            texto='Base solida em JavaScript e capacidade de usar a linguagem nos desenvolvimentos Front-End e Back-End.'
            />
          </div>
          <div className={styles.Cards}>
            <CardSkills skill='ReactJs' 
            texto="Com a biblioteca ReactJs posso programar o Front-end completo de projetos web e promover a interação com o Back-end integrando API's."
            />
          </div>

          <div className={styles.Cards}>  
            <CardSkills skill='NextJs' 
            texto='Com NextJs posso programar o Front-end completo de projetos web (como esse site por exemplo) e promover a interação com o Back-end.'
            />
          </div>  

          <div className={styles.Cards}>
            <CardSkills skill='NodeJs' 
            texto="Capacidade de desenvolver Api's Rest para o Back-end usando a biblioteca NodeJs, para a interação do Front-End com o banco de dados 
            (MongoDB ou outros) por meio de CRUD's, interações especificas, restrições de acessos e etc."
            />
          </div>

          <div className={styles.Cards}>
            <CardSkills skill='C / C++' 
            texto='Durante a faculdade diversas materias que envolvem programação (algoritimos, estruturas de dados 1 e 2, teoria dos
              grafos e outras) são lecionadas em C e C++.'
            />
          </div>

          <div className={styles.Cards}>
            <CardSkills skill='Git, Github e Bitbucket' 
            texto='Trabalho com o metodo de branchs e tenho noção dessas ferramentas para o versionamento de códigos.'
            />
          </div>
                           
        </section>
           
    </>  
  )
}

export default Skills