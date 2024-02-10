import React from 'react'
import First from './component/First'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Slider from './component/Slider'
import Offer from './component/Offer'
import Car from './component/Car'
import Testimonial from './component/Testimonial'
import Contact from './component/Contact'
import Footer from './component/Footer'

const page = () => {
  return (
    <>
      <First/>  
      <Navbar/>
      <Hero/>
      <Slider/>
      <Offer/>
      <Car/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default page