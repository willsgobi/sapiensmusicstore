import '../../styles/globals.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
