import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-5 mb-8'>
      <Head>
        <title>
          The World Of PG | A Psychology and Basketball blogging platform
        </title>
        <link rel='icon' href='/favicon.ico' />
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name='title'
          content='The World Of PG | A Psychology and Basketball blogging platform'
        />
        <meta
          name='description'
          content='Psychology as a subject and Basketball as a sport are my areas of interests. I am keen to pursue my career in the field of psychology and I believe that playing a sport helps to build and develop a strong character. With this website, my aim is to help fellow students and other people benefit from my knowledge of psychology and basketball. I hope to be able to engage the community and hopefully in helping to learn from each other.'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.theworldofpg.com/' />
        <meta
          property='og:title'
          content='The World Of PG | A Psychology and Basketball blogging platform'
        />
        <meta
          property='og:description'
          content='Psychology as a subject and Basketball as a sport are my areas of interests. I am keen to pursue my career in the field of psychology and I believe that playing a sport helps to build and develop a strong character. With this website, my aim is to help fellow students and other people benefit from my knowledge of psychology and basketball. I hope to be able to engage the community and hopefully in helping to learn from each other.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/abhishek25/image/upload/v1672593334/TheWorldOfPG_meta_vjdgae.png'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.theworldofpg.com/' />
        <meta
          property='twitter:title'
          content='The World Of PG | A Psychology and Basketball blogging platform'
        />
        <meta
          property='twitter:description'
          content='Psychology as a subject and Basketball as a sport are my areas of interests. I am keen to pursue my career in the field of psychology and I believe that playing a sport helps to build and develop a strong character. With this website, my aim is to help fellow students and other people benefit from my knowledge of psychology and basketball. I hope to be able to engage the community and hopefully in helping to learn from each other.'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/abhishek25/image/upload/v1672593334/TheWorldOfPG_meta_vjdgae.png'
        />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 text-white'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
