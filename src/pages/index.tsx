import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {prisma} from '../db/client'
import { trpc } from '../utils/trpc'

const QuestionCreator : React.FC = () => {
  const { mutate } = trpc.useMutation("question.create")
  return (
    <input className='border-slate' onSubmit={(e) => {
      console.log("Value?", e.currentTarget.value)
    }}
    ></input>
  )
}

const Home: NextPage = () => {
  const {data, isLoading} = trpc.useQuery(["question.getAll"])

  if(isLoading || !data) return <div>Loading...</div>
  return (
  <div>
    <div className='flex flex-col'>
      <div className='text-2xl font-bold'>Questions</div>
    {data[0]?.question}
    </div>
    <QuestionCreator />
  </div>
    )
}

export default Home
