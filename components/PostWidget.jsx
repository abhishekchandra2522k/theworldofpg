import React, { useState, useEffect } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'
import moment from 'moment'
import Link from 'next/link'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug])

  // console.log(relatedPosts)

  return (
    <div className='bg-white text-black shadow-lg rounded-lg p-4 mb-8 flex flex-col items-center mt-20'>
      <h3 className='text-xl mb-4 font-semibold border-b pb-2'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      <div className=''>
        {relatedPosts
          .slice(0)
          .reverse()
          .map((post) => (
            <Link href={`/post/${post.slug}`} key={post.title}>
              <div
                className='flex items-center w-full mb-2 bg-gray-200 py-2 px-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-500'
                key={post.title}
              >
                <div className='w-16 flex-none'>
                  <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    height='60px'
                    width='60px'
                    className='align-middle rounded-full'
                  />
                </div>
                <div className='flex-grow ml-4'>
                  <Link
                    href={`/post/${post.slug}`}
                    key={post.title}
                    className='text-sm font-semibold'
                  >
                    {post.title}
                  </Link>
                  <p className='font-xs text-xs'>
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default PostWidget
