import type { NextPage } from 'next'
import Navbar from '../components/NavBar'
import VoltarAoInicio from '../components/VoltarAoInicio'
import styles from '../styles/Curriculo.module.scss'

const Curriculo = () => {
  return (  
    <>
        <Navbar/>
        <hr/>
        <section className={styles.Curriculo}>
        <h1>Currículo</h1>

        <h2>Dados Pessoais</h2>
        <hr/>

        <h3>Nome:</h3>

        <p>Pedro Grimaldi Hansel</p>

        <h3>Data de Nascimento:</h3>

        <p>13/06/2003</p>

        <h3>Residência:</h3>

        <p>Juiz de fora (MG)</p>

        <h3>Idiomas:</h3>

        <p>Português (Nativo).</p>
        <p>Inglês avançado.</p>

        <h2>Sobre Mim</h2>
        <hr/>

        <p>Meu nome é Pedro, tenho 19 anos e atualmente estou cursando a graduação em ciencias da computação
        pela UFJF e sou Desenvolvedor, Gerente de Projetos e Conselheiro Multiplicador na Code Empresa Jr.</p>

        <h2>Educação</h2>
        <hr/>

        <h3>Ensino superior</h3>

        <p>Atualmente curso a graduação em <a href="https://www2.ufjf.br/ufjf/ensino/graduacao/ciencias-exatas/" 
        target="_blank" rel="noreferrer">Ciencias Exatas</a> e <a href="https://www.ufjf.br/cursocomputacao/" 
        target="_blank" rel="noreferrer">Ciencias da Computação</a> na Universidade Federal de Juiz de Fora.</p>

        <h3>Ensino médio</h3>

        <p><a href="http://www.colegioalaor.com.br/" target="_blank" rel="noreferrer">Colégio Alaor.</a> </p>

        <h3>Curso de ingles</h3>

        <p>Formação completa no curso de ingles CNA.</p>

        <h2>Habilidades</h2>
        <hr/>

        <h3>HTML/CSS:</h3>

        <p>Capacidade de desenvolver projetos Front-end usando as linguagens HTML e CSS e uso de frameworks como por exemplo Bootstrap.</p>
 
        <h3>JavaScript:</h3>

        <p>Base solida em JavaScript e capacidade de usar a linguagem nos desenvolvimentos Front-End e Back-End.</p>

        <h3>ReactJs:</h3>

        <p>Com a biblioteca ReactJs posso programar o Front-end completo de projetos web e promover a interação com o Back-end integrando Api's.</p>

        <h3>NextJs:</h3>

        <p>Com NextJs posso programar o Front-end completo de projetos web (como esse site por exemplo) e promover a interação com o Back-end.</p>

        <h3>NodeJs:</h3>

        <p>Capacidade de desenvolver Api's Rest para o Back-end usando a biblioteca NodeJs, para a interação do Front-End com o banco de dados 
        (MongoDB ou outros) por meio de CRUD's, interações especificas, restrições de acessos e etc.</p>
        
        <h3>C/C++:</h3>

        <p>Durante a faculdade diversas materias que envolvem programação (algoritimos, estruturas de dados 1 e 2, teoria dos
            grafos e outras) são lecionadas em C e C++.</p>

        <h3>Git, Github e Bitbucket:</h3>

        <p>Trabalho com o metodo de branchs e tenho noção dessas ferramentas para o versionamento de códigos.</p>

        <h2>Experiência de Trabalho</h2>
        <hr/>

        <h3>2022-Em andamento</h3>

        <p>Desenvolvedor, Gerente de Projetos e Conselheiro Multiplicador na <a href="https://www.instagram.com/codejr/"
        target="_blank" rel="noreferrer">Code Empresa Jr.</a>, em Juiz de Fora-MG.</p>
          
        
        </section>
        
        <VoltarAoInicio/>   
    </>  
  )
}

export default Curriculo