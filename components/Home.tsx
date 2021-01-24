import React from 'react'
// import resume from "../../images/resume.pdf"

export default function Home(){
    return (
        <div id="home">
        <div className="main-text">
            <p className="greet">Hi, my name is</p>
            <h1 className="name">Kit Harvey Caubalejo.</h1>
            <p className="des">I'm a self-taught front-end web developer.</p>
        </div>
        <div className="main-buttons-container">
            <div className="main-buttons">
                <a href="/resume.pdf" target="__blank">view resume</a> 
            </div>
            <div className="main-buttons">
                <a href="mailto:kitharveycaubalejo@gmail.com" target="__blank" >get in touch</a>
            </div>
        </div>
    </div>
    )
}