import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our PROGRAM' title = 'What We Offer'/>
        <Programs />
        <About/>
        <Title subTitle='Gallery' title = 'University Photos'/>
        <Gallery/>
        <Title subTitle='TESTIMONIALS' title ='What Students Say'/>
        <Testimonials/>
        <Title subTitle='CONTACT US' title ='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>

    </div>
  )
}

export default App
