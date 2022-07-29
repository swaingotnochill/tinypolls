import React from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/solid'

const CreatePoll = () => {
    return (
        <div className='flex justify-center items-center bg-black h-screen'>
            <div className='w-5/6 md:w-5/6 max-w-5xl'>
            <h1 className='text-4xl sm:text-6xl font-bold text-center text-white mb-7'>Create your <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Polls</span></h1>
            <div className='flex justify-start items-center '>
                <div className='space-y-5 flex-1 p-5 rounded-md bg-white'>
                    <div className='space-y-2'>
                        <h1>Question</h1>
                        <p className='flex'>
                        <input placeholder='Add an option here...' className='flex bg-gray-200 rounded grow p-2' type='text' />
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <h1>Options</h1>
                        <p className='flex'>
                            <input placeholder='Add an option here...' className='bg-gray-200 rounded grow p-2' type='text' />
                            <MinusIcon className='w-10 h-10 text-black bg-gray-200 rounded ml-2 p-1 cursor-pointer'/>
                        </p>
                        <p className='flex'>
                            <input placeholder='Add an option here...' className='bg-gray-200 rounded grow p-2' type='text' />
                            <MinusIcon className='w-10 h-10 text-black bg-gray-200 rounded ml-2 p-1 cursor-pointer'/>
                        </p>
                    </div>
                    <button className='bg-purple-400 text-xl font-semibold px-6 py-4 text-white rounded hover:bg-pink-600 ease-in-out duration-300 cursor-pointer'>Create Poll</button>

                </div>
            </div>
            </div>
        </div>
    )
}

export default CreatePoll
