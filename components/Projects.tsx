import React, { useState } from "react"

const projects = [
  {
    title: "Pokénex",
    description:
      "Pokédex app in card style. Swipe through pokémon cards or guess who's that pokémon?",
    tools: [
      "nextjs",
      "typescript",
      "sass",
      "pokéapi",
      "framer-motion",
      "redux-toolkit",
      "mongodb",
      "next-auth",
    ],
    repo: "https://github.com/kitharvey/pokenex",
    demo: "https://pokenex.vercel.app/",
    gif: "/pokenex.gif",
    gifPause: "/pokenex-pause.gif",
  },
  {
    title: "Shtonks",
    description:
      "Financial Modeling Prep Clone but Discounted. Shows stocks lastest news and latest prices.",
    tools: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "swr",
      "framer-motion",
      "highcharts",
      "financialmodelingprep-api",
    ],
    repo: "https://github.com/kitharvey/shtonks",
    demo: "https://shtonks.vercel.app/",
    gif: "/shtonks.gif",
    gifPause: "/shtonks-pause.gif",
  },
]

const Projects: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<number | null>(null)
  return (
    <div id="page" className="projects">
      <div className="proj-wrapper">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="proj"
            onMouseOut={() => setIsPlaying(null)}
            onBlur={() => setIsPlaying(null)}
            onMouseOver={() => setIsPlaying(index)}
            onFocus={() => setIsPlaying(index)}
          >
            <div className="details">
              <h2>{project.title}</h2>
              <div className="subtitles">
                <p className="description">{project.description}</p>
              </div>
              <div className="tools">
                {project.tools.map((tool) => (
                  <p key={tool} className="description">
                    {tool}
                  </p>
                ))}
              </div>
              <div className="subtitles">
                <a className="link" href={project.repo} target="__blank">
                  {" "}
                  <small>Repository </small>{" "}
                </a>
                <a className="link" href={project.demo} target="__blank">
                  {" "}
                  <small>Website </small>{" "}
                </a>
              </div>
            </div>
            <div className="video-container">
              <img
                className="video"
                src={isPlaying === index ? project.gif : project.gifPause}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='other-projects' >
          <h3>Other Projects:</h3>
          <span>
            <a href="https://www.frontendmentor.io/profile/kitharvey" target="__blank">
              Frontend Mentor Submissions
            </a>
          </span>
          <span>
            <a href="https://unswish.vercel.app/" target="__blank">
              Unswish
            </a>
          </span>
      </div>

    </div>
  )
}

export default Projects
