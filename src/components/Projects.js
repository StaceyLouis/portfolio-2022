import React, { useState } from 'react'
import '../styles/Projects.scss'
import data from '../data'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


const Projects = () => {
  const [projects, setProjects]= useState(data)
 
  
  const projectList = projects.map(i => {
    return(
      <div className='card' key={i.id}>
        <h2 className="card-title">{i.title}</h2>
        <p className="card-body">{i.desc}</p>
        <p>{i.tech}</p>
        <div className='icons-container'>
          <a href={i.repo} target="_blank"><FontAwesomeIcon icon={faGithub} className="icons"/> </a>
          <a href={i.url} target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icons"/></a>
        </div>
      </div>
    )
  })
  return (
    <div id='projects' className='projects'>
      <h1 className='proj-title'>PROJECTS</h1>
      <div className='card-container'>
      {projectList}
      </div>
    </div>
  )
}

export default Projects