import React from 'react'
import Head from 'next/head'

const Contact = () => (
  <div className='container mx-auto lg:w-2/4 bg-white bg-opacity-50 shadow-lg rounded-lg p-8 pb-12 mb-8 mt-16'>
    <Head>
      <title>Contact | The World of PG</title>
    </Head>
    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Contact Me</h3>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
      <input
        type='text'
        className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 bg-gray-200 text-gray-800'
        placeholder='Name'
        name='name'
      />
      <input
        type='text'
        className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 bg-gray-200 text-gray-800'
        placeholder='Email'
        name='email'
      />
    </div>
    <div className='grid grid-cols-1 gap-4 mb-4'>
      <textarea
        className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 bg-gray-200 text-gray-800'
        placeholder='Message'
        name='message'
      />
    </div>
    {/* <div className='grid grid-cols-1 gap-4 mb-4'>
      <div>
        <input type='checkbox' id='storeData' name='storeData' value='true' />
        <label
          className='text-gray-500 cursor-pointer ml-2'
          htmlFor='storeData'
        >
          Save my e-mail and name for the next time I comment.
        </label>
      </div>
    </div> */}
    <div className='mt-8'>
      <button
        type='button'
        className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 rounded-full text-white px-6 py-2 cursor-pointer'
      >
        Send
      </button>
    </div>
  </div>
)

export default Contact
