import React from "react"
import "../scss/style.scss"
import type { AppProps } from "next/app"
import { AnimatePresence, motion } from "framer-motion"
import Nav from "../components/Nav"
import ParticlesComponent from "../components/ParticlesComponent"

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <div className="wrapper">
        <Nav />
        <ParticlesComponent />
        <AnimatePresence>
          <div className="container">
            <motion.div
              key={router.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              id="page-transition"
            >
              <Component {...pageProps} key={router.pathname} />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </>
  )
}
