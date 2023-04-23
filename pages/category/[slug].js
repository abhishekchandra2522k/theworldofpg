import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getCategories, getCategoryPost } from '../../services'
import { PostCard, Categories, Loader } from '../../components'

const CategoryPost = ({ posts }) => {
  const router = useRouter()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className='container mx-auto px-5 mb-8 pt-20'>
      {categories.map(function (category) {
        if (category.slug === router.query.slug) {
          return (
            <Head>
              <title key={category.name}>
                {category.name} | The World of PG
              </title>
            </Head>
          )
        }
      })}

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
        <div className='col-span-1 lg:col-span-8'>
          {posts
            .slice(0)
            .reverse()
            .map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CategoryPost

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
