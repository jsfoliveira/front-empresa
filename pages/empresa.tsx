import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Company from '../src/components/Company'
import styles from '../styles/Home.module.css'


const Empresa: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>D3E ENERGY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.main}>
        <Navbar />
      </nav>
      <main>
        <Company />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}


export default Empresa;