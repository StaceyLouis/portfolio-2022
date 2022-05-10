import React from 'react'
import '../styles/Nav.scss'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='header-icon'>
        <h1 className='logo'>SL.</h1>
      </div>
      <div className='nav-items'>
        <a href='#projects'>projects</a>
        <a href='#skills'>skills</a>
        <a href='#contact'>contact</a>
      </div>
    </div> 
  )
}

export default Nav