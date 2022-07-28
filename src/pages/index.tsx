import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {prisma} from '../db/client'
import { trpc } from '../utils/trpc'
import React from 'react'

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
        console.log("Pressed Enter", e.currentTarget.value)
        mutate({question: e.currentTarget.value})
      }
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
    {data.map((question) => {
      return (
        <div key={question.id} className='my-2'>
          {question.question}
        </div>
      )
    }
      )
    }
    </div>
    <QuestionCreator />
  </div>
    )
}

export default Home
