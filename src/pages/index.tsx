import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {prisma} from '../db/client'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  const {data, isLoading} = trpc.useQuery(["hello"])

  if(isLoading || !data) return <div>Loading...</div>

  return <div>{data?.greeting}</div>
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
