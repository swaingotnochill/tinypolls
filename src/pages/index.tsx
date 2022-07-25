import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TinyPolls</title>
        <meta name="description" content="Tinypolls app created in next" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main>
        <h1 className='text2xl font-bold'>Welcome to TinyPolls!</h1>
      </main>
    </div>
  )
}

export default Home
