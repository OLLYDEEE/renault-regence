import React from 'react'
import First from './component/home/First'
import Navbar from './component/home/Navbar'
import Hero from './component/home/Hero'
import Slider from './component/home/Slider'
import Offer from './component/home/Offer'
import Car from './component/home/Car'
import Testimonial from './component/home/Testimonial'
import Contact from './component/home/Contact'
import Footer from './component/home/Footer'
import Service from './component/home/Service'

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
      {/* <Contact/> */}
      <Footer/>
      <Service/>
    </>
  )
}

export default page