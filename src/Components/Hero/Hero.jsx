import React from 'react'
import './Hero.css'
import { BiRightArrowAlt } from 'react-icons/bi'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1> We Ensure bettter education for a better world </h1>
            <p> Our cutting-edge curriculum is designed to empower students with knowledge, skills, and experiences needed to excel in the dynamic field of education  </p>
            <button className='btn'> Explore More <BiRightArrowAlt size={30}/>  </button>
        </div>
    </div>
  )
}

export default Hero
