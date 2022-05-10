import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='name-title'>Hi, I am
        <span className='blue-title'> Stacey Louis.</span></h1>

      <h2 className="sub-title">A Full Stack Developer.</h2>
      <p className='desc'>I am passionate about coding! I spend my days practicing my skills and building more experience as a Developer.
      I am currently working on Python and animation </p>

<div className='btn-group'>
      <button className='resume-btn'>resume</button>
      <a href='https://github.com/StaceyLouis' target="_blank"><FontAwesomeIcon icon={faGithub} className="btn-icon"/> </a>
      <a href='https://www.linkedin.com/in/stacey-louis/' target="_blank"><FontAwesomeIcon icon={faLinkedin} className="btn-icon"/> </a>
      </div>
    </div> 
  )
}

export default Header