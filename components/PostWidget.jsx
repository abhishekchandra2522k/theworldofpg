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
    <div className='bg-white text-black shadow-lg rounded-lg p-8 mb-8 mt-20'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div className='flex items-center w-full mb-4' key={post.title}>
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
            <p className='text-gray-500 font-xs text-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className='text-sm font-semibold text-gray-900 hover:text-gray-700'
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
