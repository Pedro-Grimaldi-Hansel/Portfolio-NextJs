import type { NextPage } from 'next'
import CardContato from '../components/CardContato'
import Navbar from '../components/NavBar'
import styles from '../styles/Contato.module.scss'

const Contato = () => {
  return (  
    <>
        <Navbar/>
        <hr/>
        <section className={styles.Contato}>
          <h1>Contato</h1>
          <h2>Email:</h2>
          <p>pedroghansel@gmail.com</p>
          <h2>Celular:</h2>
          <p>+55(24)999449717</p>
          <h2>Endereço:</h2>
          <p>Av. Pres. Costa e Silva, 2391 - São Pedro, Juiz de Fora - MG</p>
        </section>
        <CardContato/>

    </>  
  )
}

export default Contato