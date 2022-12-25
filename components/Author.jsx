import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'

// import { grpahCMSImageLoader } from '../util'

const Author = ({ author }) => (
  <div className='mb-4 p-8 relative rounded-lg bg-white bg-opacity-20'>
    {/* <div className='absolute left-0 right-0 -top-14'>
      <Image
        unoptimized
        // loader={grpahCMSImageLoader}
        alt={author.name}
        height={100}
        width={100}
        className='align-middle rounded-lg inline-block'
        src={author.photo.url}
      />
    </div> */}
    <Link href='/about'>
      <h3 className='text-white text-xl transition duration-500 hover:text-black'>
        {/* <span className='text-white text-base font-medium'>Author: </span> */}
        {author.name}
      </h3>
    </Link>
    {/* <p className='text-white text-ls'>{author.bio}</p> */}
  </div>
)

export default Author
