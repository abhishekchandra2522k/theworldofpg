import React from 'react'
import Head from 'next/head'
import moment from 'moment'
import Link from 'next/link'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className='text-xl font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className='mb-8'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className='text-md font-semibold mb-4'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      case 'iframe':
        return (
          <iframe
            key={index}
            src={obj.url}
            title={obj.title}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full lg:h-96 sm:h-64'
          ></iframe>
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-4 mt-20'>
      <Head>
        <title>{post.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='relative overflow-hidded shadow-md mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top h-full w-full rounded-t-lg sm:rounded-lg'
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='w-full'>
          <div className='flex items-center mb-4 lg:mb-4 w-full lg:w-auto mr-6'>
            {/* <img
              src={post.author.photo.url}
              alt={post.author.name}
              height='30px'
              width='30px'
              className='align-middle rounded-full'
            /> */}
            <Link href='/about'>
              <p className='inline align-middle text-gray-700 text-lg hover:text-black'>
                {post.author.name}
              </p>
            </Link>
          </div>
          <div className='font-medium text-gray-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 inline mr-2 text-black-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>

            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className='mb-6 mt-8 text-3xl font-semibold'>{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail
