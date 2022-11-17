import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SHED626 Music Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SHED626 Music Hub" />
        <p className="description">
          Stiamo lavorando al nuovo sito! Seguici su <a href="https://instagram.com/shed626musichub">Instagram</a> per restare aggiornato e non esitare a contattarci.
        </p>
      </main>

      <Footer />
    </div>
  )
}
