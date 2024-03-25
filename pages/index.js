import Head from 'next/head'
import { PostCard, Categories, PostWidget, Introduction } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
  // console.log(posts)
  return (
    <div className='container mx-auto px-5 mb-8'>
      <Head>
        <title>Dramatic Pages by Theia Jain</title>
        <link rel='icon' href='../public/favicon.ico' />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        {/* <!-- Primary Meta Tags --> */}
        <meta name='title' content='Dramatic Pages by Theia Jain' />
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
        <meta property='og:title' content='Dramatic Pages by Theia Jain' />
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
        <meta property='twitter:title' content='Dramatic Pages by Theia Jain' />
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
      {/* <FeaturedPosts /> */}
      <div className='absolute mt-20'>
        <Introduction />
      </div>

      <div className='relative grid grid-cols-1 lg:grid-cols-12 gap-10'>
        {/* <div className='lg:col-span-8 col-span-1'>
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div> */}
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
