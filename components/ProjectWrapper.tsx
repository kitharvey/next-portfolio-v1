import React from "react"

interface ProjectProp {
  title: string
  description: string
  tools: string[]
  repo: string
  demo: string
  gif: string
  gifPause: string
}
interface ProjectWrapperProps {
  project: ProjectProp
  index: number
  isPlaying: number | null
  onMouseOut: () => void
  onBlur: () => void
  onMouseOver: () => void
  onFocus: () => void
}

const ProjectWrapper: React.FC<ProjectWrapperProps> = ({
  project,
  index,
  isPlaying,
  onMouseOut,
  onBlur,
  onMouseOver,
  onFocus,
}) => (
  <div
    className="proj"
    onMouseOut={onMouseOut}
    onBlur={onBlur}
    onMouseOver={onMouseOver}
    onFocus={onFocus}
  >
    <div className="details">
      <h2>{project.title}</h2>
      <div className="subtitles">
        <p className="description">{project.description}</p>
      </div>
      <ul className="tools">
        {project.tools.map((tool) => (
          <li key={tool}>
            <p className="description">{tool}</p>
          </li>
        ))}
      </ul>
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
)

export default ProjectWrapper
