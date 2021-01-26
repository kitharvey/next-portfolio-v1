import Link from 'next/link'
import React from 'react'

export default function Home(){
    return (
        <div id="home">
        <div className="main-text">
            <h1 className="name">I'm Kit Harvey.</h1>
            <p className="des">I'm a self-taught front-end web developer. <br/>I help clients and companies convert their design to HTML using React, TypeScript and Sass.</p>
        </div>
        <div className="main-buttons-container">
            <div className="main-buttons">
                <a href="/resume.pdf" target="__blank">View Resume</a> 
            </div>
            <div className="main-buttons">
                <Link href="/#contact">Hire Me</Link>
            </div>
        </div>
    </div>
    )
}