import React from 'react'

export default function About(){

    return (
        <div id="about">
            <p className="title-section">About Me</p>
            <div className="about-container">
                <div className="about-details">
                    <div className="overview">
                        <h1>Overview</h1>
                        <p className="overview-text">
                            Hi, I’m a Front-End Developer based in General Santos City, Philippines. I’m always fascinated by graphic design, typography and algorithms. Front-End development has given me the ability to do both design and code. I was hooked and I want to master this craft. My dream is to work with like-minded and passionate people building amazing projects.
                            When I’m away from my keyboard you can find me at the gym pumping irons, running and spending time with friends and family. I also love learning self-improvement, philosophy, finance and health and fitness. There is always room to grow.
                        </p>
                    </div>
                    <div className="tools">
                        <h1>Tools</h1>
                        <ul>
                            <li>JavaScript/HTML/CSS</li>
                            <li>SCSS/Sass</li>
                            <li>TypeScript</li>
                            <li>TailwindCSS</li>
                            <li>React.js</li>
                            <li>GraphQL</li>
                            <li>Node.js</li>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Git</li>
                        </ul>
                    </div>            
                </div>
            </div>
        </div>
    )
}