import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const BasketBallRules = () => (
  <div className='mt-8 mb-8 py-6 px-3 relative'>
    <Head>
      <title>Basketball Rules and History | The World of PG</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='absolute left-0 right-0 -top-14'></div>
    <div className='flex flex-col text-white p-2'>
      <span className='text-xl uppercase underline underline-offset-8 decoration-solid pb-10 font-black'>
        Basketball - Rules and Key Points
      </span>
      <img
        src='https://res.cloudinary.com/abhishek25/image/upload/v1671010137/court-dimensions_xmtpmi.jpg'
        alt="Basketball Court's Dimensions"
        className='sm:h-96 sm:w-96 h-120 w-120'
      />
    </div>
    {/* <h3 className='text-white mt-4 mb-4 text-xl font-bold'>
      <span className='text-white'>
        The <span className='text-red-400'>World</span> of{' '}
        <span className='text-lime-400'>Paawni Goyal</span>:
      </span>
    </h3> */}
  </div>
)

export default BasketBallRules
