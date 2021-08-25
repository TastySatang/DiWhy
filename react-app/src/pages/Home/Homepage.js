import React from 'react';

import back from './image1.jpg'
import './Homepage.css'

const HomePage = () => {

  return (
    <div>
      <div className='Home__imageContent' style={{ backgroundImage: `url(${back})` }}>
        <div className='imageContent__inner'>
          <div className='imageContent__text'>
            <h1>
              YOURS FOR THE MAKING
            </h1>
            <p>
              Instructables is a community for people who like to make things. Come explore, share, and make your next project with us!
            </p>
          </div>
        </div>
      </div>
      <div className='Home__textContent'>
        <div className='textContent__box'>
          <h2>Step-by-step</h2>
          <p id='content__p'>We make it easy to learn how to make anything, one step at a time. From the stovetop to the workshop, you are sure to be inspired by the awesome projects that are shared everyday.</p>
        </div>
        <div className='textContent__box'>
          <h2>Made By You</h2>
          <p id='content__p'>Projects are created by you. No matter who you are, we all have secret skills to share. Come join our community of curious makers, innovators, teachers, and life long learners who love to share what they make.</p>
        </div>
        <div className='textContent__box'>
          <h2>A Happy Place</h2>
          <p id='content__p'>Making things makes people happy. We can't prove it, but we know it to be true. Find your happy place, and join one of the friendliest online communities anywhere.</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default HomePage
