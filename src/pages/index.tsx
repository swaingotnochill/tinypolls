import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {prisma} from '../db/client'
import { trpc } from '../utils/trpc'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const QuestionCreator : React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const client = trpc.useContext()
  const { mutate, isLoading } = trpc.useMutation("question.create",{
    onSuccess: (data) => {
        client.invalidateQueries(["question.getAll"])
        if(!inputRef.current) return
        inputRef.current.value = ""
    }
  })
  return (
    <input
    ref={inputRef}
    disabled={isLoading}
    className='border-slate'
    onKeyDown={(e) => {
      if(e.key === 'Enter') {
        mutate({question: e.currentTarget.value})
      }
    }}
    ></input>
  )
}

const Home: NextPage = () => {
  const {data, isLoading} = trpc.useQuery(["question.getAll"])

  const router = useRouter()

  return (
  // <div>
  //   <div className='flex flex-col'>
  //     <div className='text-2xl font-bold'>Questions</div>
  //   {data.map(({id,question}) => {
  //     return (
  //       <Link href={`/question/${id}`}>
  //       <div id={id} key={id} className='my-2'>
  //         {question}
  //       </div>
  //       </Link>
  //     )
  //   }
  //     )
  //   }
  //   </div>
  //   <QuestionCreator />
  // </div>

  <div className='flex justify-center items-center bg-black h-screen max-h-full'>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <div className='flex flex-col justify-center items-center w-5/6 md:w-5/6 max-w-7xl space-y-7 text-white '>
      <h1 className='text-6xl font-bold'>Tiny<span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Polls</span></h1>
      <h3 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nulla! Impedit aut magni saepe ipsam reprehenderit cumque consequuntur. Tempora exercitationem recusandae ut error adipisci quod quidem nemo ipsam quibusdam cumque.</h3>
      <button onClick={()=> router.push('CreatePoll')} className='bg-purple-400 text-xl font-semibold px-8 py-5 rounded hover:bg-pink-600 ease-in-out duration-300 cursor-pointer'>Create Poll</button>
    </div>
    )}

  </div>
    )
}

export default Home
