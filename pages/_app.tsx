
import React from 'react'

import './scss/style.scss'
import Portfolio from './Portfolio/Portfolio'
import Head from 'next/head'
export default function MyApp() {
  return (
    <div >
        <Head>
            <title>Kit Harvey | Front-End Dev</title>
            <link rel="shortcut icon" href="/icon.png" sizes="any"/>
        </Head>
        <Portfolio/>
    </div>
  )
}