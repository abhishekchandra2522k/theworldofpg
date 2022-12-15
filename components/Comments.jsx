import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'
import { comment } from 'postcss'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result)
    })
  }, [])

  return (
    <>
      {comment.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-6 pb-2 mb-2'>
          <h3 className='text-lg mb-2 font-medium border-b pb-1'>
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className='border-b border-gray-100 mb-2 pb-1'
            >
              <p className='mb-1'>
                <span className='font-semibold'>{comment.name}</span>{' '}
                <span className='text-xs font-light'>
                  on {moment(comment.createdAt).format('MMM DD, YYYY')}
                </span>
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
