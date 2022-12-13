import React from 'react'
import Head from 'next/head'

const About = () => (
  <div className='text-center mt-20 mb-8 p-8 relative bg-black bg-opacity-20'>
    <Head>
      <title>About Me | The World of PG</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='absolute left-0 right-0 -top-14'></div>
    <div className='flex flex-col items-center text-white'></div>
    <h3 className='text-white mt-4 mb-4 text-xl font-bold'>
      <span className='text-white'>
        The <span className='text-red-400'>World</span> of{' '}
        <span className='text-lime-400'>Paawni Goyal</span>:
      </span>
    </h3>
    <p className='text-white text-ls'>
      Hi, my name is <strong>Paawni Goyal</strong> and I am a class 11 ISC
      Curriculum student at [School Name].
      <br />
      <br />
      This year, I am excited to learn more about my chosen subjects, which
      include [Subjects]. I am looking forward to challenging myself
      academically and gaining a deeper understanding of the subjects that I am
      passionate about. I am also looking forward to participating in
      extracurricular activities and developing new skills outside of the
      classroom. I am determined to succeed in the ISC examination and I am
      willing to work hard to achieve my goals. I am eager to learn from my
      teachers and peers, and I am open to new experiences that will help me
      grow and develop as a student and as a person. I am excited and looking
      forward to the year ahead.
    </p>
  </div>
)

export default About
