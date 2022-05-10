import React from 'react'
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='name-title'>Hi, I am
        <span className='blue-title'> Stacey Louis.</span></h1>

      <h2 className="sub-title">A Full Stack Developer.</h2>
      <p className='desc'>Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.</p>

      <button className='resume-btn'>resume</button>
    </div> 
  )
}

export default Header