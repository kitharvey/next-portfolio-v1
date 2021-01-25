import React from 'react'
// import poke from '../../public/poke-decks.mp4'
// import path from '/pathfinder.mp4'
// import fx from '/fx.mp4'

const projects = [
    {
        title: 'Pokédecks',
        description: 'A pokédex in card style.',
        tools: ["react",
                "typescript",
                "tailwindcss",
                "PokéAPI",
                "Framer",
                "react-query"],
        repo: 'https://github.com/kitharvey/poke-decks',
        demo: 'https://kitharvey.github.io/poke-decks/#/',
        vid: '/poke-decks.mp4'
    },
    {
        title: 'Pathfinder',
        description: 'A* search algorithm visualizer.',
        tools: ["html",
                "javascript",
                "scss"],
        repo: 'https://github.com/kitharvey/Pathfinder',
        demo: 'https://kitharvey.github.io/Pathfinder/',
        vid: '/pathfinder.mp4'
    },
    {
        title: 'FX Daily Forecast',
        description: 'Foreign exchange daily chart, signal and lastest price. All data were fetched from https://fcsapi.com/ and displayed by using react app.',
        tools: ["react",
                "scss",
                "fcsapi"],
        repo: 'https://github.com/kitharvey/fx-daily-forecast',
        demo: 'https://kitharvey.github.io/fx-daily-forecast/',
        vid: '/fx.mp4'
    },
]

const Projects: React.FC = () => {   

    return(
        <div id="projects">
            <p className="uppercase-text">projects</p>
            <div className="proj-wrapper">
                {projects.map( (project, index) => (
                <div key={index} className="proj" >
                    <div className = "details">
                        <h1>{project.title}</h1>
                        <div className="subtitles" >
                            <small className="description" >{project.description}</small>
                        </div>
                        <div className="tools" >
                            {project.tools.map( (tool, idx) => (
                                <small key={idx} className="description" >{tool}</small>
                            ) )}
                        </div>
                        <div className="subtitles" >
                            <a className="link" href={project.repo} target="__blank" > <small> repository </small> </a>
                            <a className="link" href={project.demo} target="__blank" > <small> website </small> </a> 
                        </div>
                    </div>
                        <div className = "video-container" >
                            <video
                                preload="metadata"
                                className="video"
                                loop
                                onMouseOver={ (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) =>
                                    event.currentTarget.play()
                                }
                                onMouseOut={ (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) =>
                                    event.currentTarget.pause()
                                }
                            >
                                 <source 
                                 src={project.vid}
                                 type="video/mp4"
                                 />

                            </video>
                        </div>
                        
                </div>
                ) )}

            </div>
        </div>
    )
}

export default Projects