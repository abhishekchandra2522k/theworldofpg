import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default MyApp
