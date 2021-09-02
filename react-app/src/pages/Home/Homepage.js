import React from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-carousel-minimal'
import bottom from './botImg.jpg'
import robots from './robotsdiy.png'
import './Homepage.css'
import { useSelector } from 'react-redux';


const HomePage = () => {
  const user = useSelector(state => state.session.user)

  const data = [
    {
      image: "https://content.instructables.com/ORIG/F9O/RI3J/KRKN3WP1/F9ORI3JKRKN3WP1.jpg?auto=webp&width=1600",

    },
    {
      image: "https://content.instructables.com/ORIG/FRH/ER1G/I7VQMYOI/FRHER1GI7VQMYOI.jpg?auto=webp&width=1600",

    },
    {
      image: "https://content.instructables.com/ORIG/FPM/UNZ1/HI3TRKSZ/FPMUNZ1HI3TRKSZ.jpg?auto=webp&width=1600",

    },
    {
      image: "https://content.instructables.com/ORIG/FG2/ZPT9/KSENBYSN/FG2ZPT9KSENBYSN.jpg?auto=webp&width=1600",

    },
    {
      image: "https://content.instructables.com/ORIG/FZJ/69R5/KSHI84ZJ/FZJ69R5KSHI84ZJ.jpg?auto=webp&width=1600",

    },
    {
      image: "https://content.instructables.com/ORIG/FI7/KIA5/KSHI84Q1/FI7KIA5KSHI84Q1.jpg?auto=webp&width=1600",

    },
  ];


  return (
    <div>
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

      <Carousel className='carousel'
        data={data}
        automatic={true}
        time={4000}
        width='100%'
        height='540px'
        dots={true}
        slideImageFit='cover'
      />



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
      <div className='home__reason'>
        <h1>Why Publish a DiWhy?</h1>
        <section>
          <img src={robots} alt='robots' />
          <h2>Everyone has something to share</h2>
          <p>We all have secret skills. Whether it's a special recipe for the best hot chocolate or the perfect way to drive a nail, even the simplest ideas are worth sharing. What's your secret?</p>
        </section>
        <div className='reason__divider'></div>
      </div>
      <div className='home__advert'>
        <div className='advert'>
          <img className='advert__img' src={bottom} alt='bottomAd' />
          <div className='advert__message'>
            <p className='message__description'>What are you waiting for?</p>
            <p className='message__hook'>Get out there and ruin something!</p>
            {user ? <Link className='message__signup' to='/projects/new'>
              <button className='message__signup--button'>Create a DiWhy!</button>
            </Link> : <Link className='message__signup' to='/sign-up'>
              <button className='message__signup--button'>Create a DiWhy!</button>
            </Link>}

          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage
