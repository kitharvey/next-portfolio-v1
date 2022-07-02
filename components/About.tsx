/* eslint-disable react/no-unescaped-entities */
import React from "react"

const experiences = [
  {
    company: "CAMBIATA MUSIC",
    title: "Web developer",
    date: "JUNE 2022 - PRESENT",
  },
  {
    company: "YES WE VIBE",
    title: "UI DEVELOPER",
    date: "MAY 2021 - MAY 2022",
    descriptions: [
      "Developed UI using jQuery, CSS, HTML and PHP.",
      "Created Email HTML and edited Wordpress UI.",
      "Collaborated with UI designers using Adobe XD.",
    ],
  },
  {
    company: "SPONSORLYTIX",
    title: "FRONT-END DEVELOPER",
    date: "JULY 2020 - OCTOBER 2020",
    descriptions: [
      "Developed front-end using React.js and SCSS.",
      "Created and customized charts using chart libraries (Google Charts, ChartJS, Recharts, Apexcharts).",
      "Collaborated with UI/UX designers using Figma. Wrote organized and efficient code.",
    ],
  },
]

const tools = [
  "JavaScript/HTML/CSS",
  "SCSS/Sass",
  "TypeScript",
  "TailwindCSS",
  "ReactJS",
  "NextJS",
  "GraphQL",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Photoshop",
  "Illustrator",
  "Git",
]

export default function About() {
  return (
    <div id="page" className="about">
      <div className="about-container">
        <div className="about-details">
          <div className="overview">
            <h1>Overview</h1>
            <p className="overview-text">
              Hi, I'm a Front-End Developer based in General Santos City, Philippines. I'm always
              fascinated by graphic design, typography and algorithms. Front-End development has
              given me the ability to do both design and code. I was hooked and I wanted to master
              this craft. My dream is to work with like-minded and passionate people building
              projects. When I'm away from my keyboard you can find me at the gym pumping irons,
              running and spending time with friends and family. I also love learning
              self-improvement, philosophy, finance, health and fitness. There is always room to
              grow.
            </p>
          </div>
          <div className="experience">
            <h1>Experience</h1>
            <div className="company-wrapper">
              {experiences.map((exp) => {
                return (
                  <div className="company-section" key={exp.company}>
                    <p className="time">{exp.date}</p>
                    <p className="company">
                      <span>{exp.title}</span>&nbsp;&#64;&nbsp;{exp.company}
                    </p>
                    <ul>
                      {exp.descriptions &&
                        exp.descriptions.map((description) => (
                          <li key={description}>
                            <p>&#8226;&nbsp;{description}</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="tools">
            <h1>Tools</h1>
            <ul>
              {tools.map((tool) => (
                <li key={tool}>
                  <p>{tool}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
