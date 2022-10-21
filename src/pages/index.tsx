import Head from 'next/head'
import Index from '../components/Index/Index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sapiens Music Store | Home</title>
        <meta name="description" content="The best music store around the world!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Index />
    </div>
  )
}
