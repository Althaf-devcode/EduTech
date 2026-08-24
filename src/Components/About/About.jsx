import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="about_img" className='about-img'/>
            <img src={play_icon} alt="play_icon" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3> About University </h3>
            <h2> Building Brighter Futures Through Education </h2>
            <p>
                Our university is committed to providing high-quality education that empowers students to achieve their academic and professional goals. We offer a supportive learning environment where students can gain strong theoretical knowledge while developing practical skills that are valuable in today’s competitive world.
            </p>

            <p>
                We believe that education goes beyond the classroom. Through modern learning facilities, experienced lecturers, research opportunities, teamwork, and extracurricular activities, students are encouraged to explore their interests, develop their talents, and build the confidence needed to face real-world challenges.
            </p>

            <p>
                Our mission is to nurture the next generation of professionals, innovators, and responsible leaders. By encouraging creativity, critical thinking, and lifelong learning, we prepare our students to make meaningful contributions to their communities and create a positive impact on the future.
            </p>

        </div>
      
    </div>
  )
}


export default About
