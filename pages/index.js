import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
  // console.log(posts)
  return (
    <div className='container mx-auto px-5 mb-8'>
      <Head>
        <title>The World Of PG | A Psychology blogging platform</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name='title'
          content='The World Of PG | A Psychology blogging platform'
        />
        <meta
          name='description'
          content='Psychology as a subject is my area of interest. I am keen to pursue my
        career in the field of psychology. With this website, I aim to help
        fellow students and other people benefit from my understanding of
        psychology. I hope to be able to engage the community and hopefully in
        helping to learn from each other.'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.theworldofpg.com/' />
        <meta
          property='og:title'
          content='The World Of PG | A Psychology blogging platform'
        />
        <meta
          property='og:description'
          content='Psychology as a subject is my area of interest. I am keen to pursue my
        career in the field of psychology. With this website, I aim to help
        fellow students and other people benefit from my understanding of
        psychology. I hope to be able to engage the community and hopefully in
        helping to learn from each other.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/abhishek25/image/upload/v1672593334/TheWorldOfPG_meta_vjdgae.png'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.theworldofpg.com/' />
        <meta property='twitter:url' content='https://theworldofpg.com/' />
        <meta property='twitter:url' content='theworldofpg.com' />
        <meta
          property='twitter:title'
          content='The World Of PG | A Psychology blogging platform'
        />
        <meta
          property='twitter:description'
          content='Psychology as a subject is my area of interest. I am keen to pursue my
        career in the field of psychology. With this website, I aim to help
        fellow students and other people benefit from my understanding of
        psychology. I hope to be able to engage the community and hopefully in
        helping to learn from each other.'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/abhishek25/image/upload/v1672593334/TheWorldOfPG_meta_vjdgae.png'
        />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 text-white'>
        <div className='lg:col-span-8 col-span-1'>
          {posts
            .slice(0)
            .reverse()
            .map((post, index) => (
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
