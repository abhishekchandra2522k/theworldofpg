import React from 'react'
import Head from 'next/head'

const About = () => (
  <div className='text-center mt-20 mb-8 p-8 relative bg-black bg-opacity-20'>
    <Head>
      <title>About Me | The World of PG</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='absolute left-0 right-0 -top-14'></div>
    <div className='flex flex-col items-center text-white p-10'>
      <p className='text-white text-ls lg:w-2/3'>
        Hi, my name is <strong>Paawni Goyal</strong> and I am a student of Grade
        11, CISCE curriculum at GEMS Modern Academy, Dubai. <br />
        <br />
        Psychology as a subject and Basketball as a sport are my areas of
        interests. I am keen to pursue my career in the field of psychology and
        I believe that playing a sport helps to build and develop a strong
        character. With this website, my aim is to help fellow students and
        other people benefit from my knowledge of psychology and basketball. I
        hope to be able to engage the community and hopefully in helping to
        learn from each other.
      </p>
    </div>
    {/* <h3 className='text-white mt-4 mb-4 text-xl font-bold'>
      <span className='text-white'>
        The <span className='text-red-400'>World</span> of{' '}
        <span className='text-lime-400'>Paawni Goyal</span>:
      </span>
    </h3> */}
  </div>
)

export default About
