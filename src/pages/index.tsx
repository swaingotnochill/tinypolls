import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {prisma} from '../db/client'
const Home: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>TinyPolls</title>
        <meta name="description" content="Tinypolls app created in next" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main>
        <h1 className='text2xl font-bold'>Welcome to TinyPolls!</h1>
        <code>
          {props.questions}
        </code>
      </main>
    </div>
  )
}

export default Home

// Function to get all questions from the database
export const getServerSideProps = async () => {
  const questions = await prisma.pollQuestion.findMany()

  return {
    props: {
      questions: JSON.stringify(questions),
    }
  }
}
