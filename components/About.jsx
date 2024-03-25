import React from 'react'
import Head from 'next/head'

const About = () => (
  <div className='text-center flex flex-col justify-center lg:h-[85vh] p-8 relative'>
    <Head>
      <title>About Me | Dramatic Pages</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/* <div className='absolute left-0 right-0 -top-14'></div> */}
    <div>
      <div className='text-black text-8xl mb-8 lg:mt-20 lg:mb-0 vibes'>
        <p>About</p>
      </div>
      <div className='lg:flex gap-x-5 text-left justify-center items-top text-white lg:p-8 pb-8'>
        <div className='text-black text-ls lg:w-4/6'>
          <h1 className='text-2xl font-bold mb-10 lg:mb-5 vibes'>Theia Jain</h1>
          <p>
            Welcome to Dramatic Pages! I'm Theia Jain, a passionate high school
            student at Gems Modern Academy in Dubai. From a young age, I've been
            captivated by the world of dramatics and communication, diving into
            the realm of acting, writing, and directing plays. For me, theater
            is more than just entertainment—it's a powerful art form that allows
            me to express myself fully. Through Dramatic Pages, I aim to share
            my original work with the world, offering inspiration to fellow
            artists in need. Whether you're seeking a compelling script or a
            spark of creativity, I invite you to explore the pages of my passion
            project and unleash your artistic potential.
          </p>
        </div>
        <div className='text-black text-ls'>
          <img src='pp.jpg' alt='' />
        </div>
      </div>
    </div>
  </div>
)

export default About
