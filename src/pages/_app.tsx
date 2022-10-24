import Head from 'next/head'
import { useEffect } from 'react'
import '../../styles/globals.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
