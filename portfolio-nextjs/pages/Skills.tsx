import type { NextPage } from 'next'
import CardSkills from '../components/CardSkills'
import Navbar from '../components/NavBar'
import styles from '../styles/Skills.module.scss'

const Skills = () => {
  return (  
    <>
        <Navbar/>
        <hr/>
        <section className={styles.Texts}>
        <h1>Skills</h1>
        <h2>Passe o mouse ou clique no icone para saber mais sobre minhas capacitações!</h2>
        </section>
        <section className={styles.Skills}>
          
          <div className={styles.Cards}>
            <CardSkills skill='HTML' 
            icones= './Images/html5-original.svg'
            texto='Base sólida em HTML e capacidade de usar a linguagem de marcação no Front-End e na integração com Back-End.'
            />
          </div> 

          <div className={styles.Cards}>
            <CardSkills skill='CSS' 
            icones= './Images/CSS3-original.svg'
            texto='Base sólida em CSS e SASS (usado nesse site), permitindo alta facilidade na criação de sites responsivos e estilizados.'
            />
          </div> 

          <div className={styles.Cards}>
            <CardSkills skill='JavaScript' 
            icones= './Images/javascript-original.svg'
            texto='Base sólida em JavaScript e capacidade de usar a linguagem no Front-End e Back-End.'
            />
          </div>
          <div className={styles.Cards}>
            <CardSkills skill='TypeScript' 
            icones= './Images/typescript-original.svg'
            texto='Base forte em TypeScript e capacidade de usar a linguagem no Front-End (como nesse site) e Back-End.'
            />
          </div>
          <div className={styles.Cards}>
            <CardSkills skill='ReactJs' 
            icones= './Images/react-original-wordmark.svg'
            texto="Com a biblioteca ReactJs posso programar o Front-End completo de projetos web e promover a interação com o Back-End integrando API's."
            />
          </div>

          <div className={styles.Cards}>  
            <CardSkills skill='NextJs' 
            icones= './Images/nextjs-original-wordmark.svg'
            texto='Com NextJs posso programar o Front-End completo de projetos web (como esse site por exemplo) e promover a interação com o Back-End.'
            />
          </div>  

          <div className={styles.Cards}>
            <CardSkills skill='NodeJs' 
            icones= './Images/nodejs-original.svg'
            texto="Posso desenvolver API's Rest, para a interação do Front-End com o banco de dados 
            por CRUD's, interações especificas, restrições de acessos e etc."
            />
          </div>

          <div className={styles.Cards}>
            <CardSkills skill='C / C++' 
            icones= './Images/cplusplus-original.svg'
            texto='Durante a faculdade diversas materias (algoritimos, estruturas de dados 1 e 2, teoria dos
              grafos e outras) são lecionadas em C e C++.'
            />
          </div>

          <div className={styles.Cards}>
            <CardSkills skill='Git, Github e Bitbucket' 
            icones= './Images/git-original.svg'
            texto='Trabalho com o metodo de branchs e tenho noção dessas ferramentas para o versionamento de códigos.'
            />
          </div>
                           
        </section>      
    </>  
  )
}

export default Skills