
import React from 'react'

import '../scss/style.scss'
import Portfolio from '../components/Portfolio'
import Head from 'next/head'
export default function MyApp() {
  return (
    <div >
        <Head>
            <title>Kit Harvey | Front-End Dev</title>
            <link rel="shortcut icon" type="image/png" href="/icon.png" sizes="50x32"/>
        </Head>
        <Portfolio/>
    </div>
  )
}