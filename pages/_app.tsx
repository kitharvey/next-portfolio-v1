
import React from 'react'
import '../scss/style.scss'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import ParticlesComponent from '../components/ParticlesComponent'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className="wrapper">
        <Nav/>
        <ParticlesComponent />
        <div className="container">
          <Component {...pageProps} />
        </div>
    </div>
   
    </>
  ) 
}