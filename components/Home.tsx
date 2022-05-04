import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <div id="page" className="home">
      <div className="main-text">
        <h1 className="name">I&apos;m Kit Harvey.</h1>
        <p className="des">
          I&apos;m a self-taught front-end developer. <br />I help clients and companies build their
          web user interfaces using ReactJS, NextJS, TypeScript and Sass.
        </p>
      </div>
      <div className="main-buttons-container">
        <div className="main-buttons">
          <a
            href="https://docs.google.com/document/d/1Tx2Juuh6GJFa-CyOJjWkIc0hYZkQy_EAEnXNrR9Ds60/edit?usp=sharing"
            target="__blank"
          >
            View Resume
          </a>
        </div>
        <div className="main-buttons">
          <Link href="/contact">Hire Me</Link>
        </div>
      </div>
    </div>
  )
}
