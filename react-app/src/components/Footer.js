import React from 'react'
import robot from './robot.png'

export default function Footer() {

  return (
    <div className='footer__container'>
      <div className='footer__top'>
        <img className='robot' src={robot} alt='robot' />
        <div className='socials'>
          <p>
            Junyeob Lee
          </p>
          <a href="https://github.com/TastySatang" className='github__favicon'>
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
      <div className='pipe'></div>
    </div>
  )
}
