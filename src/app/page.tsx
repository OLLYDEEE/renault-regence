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
import ImageSlider from './component/home/ImageSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const page = () => {
  return (
    <>
      <First/>  
      <Navbar/>
      <Hero/>
      {/* <Slider/> */}
      <ImageSlider/>
      <Offer/>
      <Car/>
      {/* <Testimonial/> */}
      {/* <Contact/> */}
      <Footer/>
      <Service/>
    </>
  )
}

export default page