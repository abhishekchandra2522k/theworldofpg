import Head from 'next/head'
import React, { useRef, useState, useEffect } from 'react'

import { submitContact } from '../services'

const Contact = () => {
  const [error, setError] = useState(false)
  // const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const messageEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  // const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleContactSubmission = () => {
    setError(false)

    const { value: message } = messageEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    // const { checked: storeData } = storeDataEl.current

    if (!message || !name || !email) {
      setError(true)
      return
    }

    const contactObj = {
      name,
      email,
      message,
    }

    // if (storeData) {
    //   window.localStorage.setItem('name', name)
    //   window.localStorage.setItem('email', email)
    // } else {
    //   window.localStorage.removeItem('name', name)
    //   window.localStorage.removeItem('email', email)
    // }

    submitContact(contactObj).then(() => {
      setShowSuccessMessage(true)

      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className='h-[75vh]'>
      <div className='container mx-auto lg:w-2/4 bg-white bg-opacity-50 shadow-lg rounded-lg p-8 pb-12 mb-8 mt-16'>
        <Head>
          <title>Contact | The World of PG</title>
        </Head>
        <h3 className='text-xl mb-8 text-white border-b border-black pb-4'>
          Contact Me
        </h3>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
          <input
            type='text'
            ref={nameEl}
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 bg-gray-200 text-gray-800'
            placeholder='Name'
            name='name'
          />
          <input
            type='text'
            ref={emailEl}
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 bg-gray-200 text-gray-800'
            placeholder='Email'
            name='email'
          />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea
            ref={messageEl}
            className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-500 bg-gray-200 text-gray-800'
            placeholder='Message'
            name='message'
          />
        </div>
        {error && (
          <p className='text-xs text-red-500'>All fields are required</p>
        )}
        <div className='mt-8'>
          <button
            type='button'
            onClick={handleContactSubmission}
            className='transition duration-500 ease hover:bg-gray-800 inline-block bg-black rounded-full text-white px-6 py-2 cursor-pointer'
          >
            Send
          </button>
          {showSuccessMessage && (
            <span className='text-xl float-right font-semibold mt-3 text-green-500'>
              Thank you for your message!
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
