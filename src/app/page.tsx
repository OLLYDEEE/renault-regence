import React from 'react'
import First from './component/First'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Slider from './component/Slider'
import Offer from './component/Offer'
import Car from './component/Car'

const page = () => {
  return (
    <>
      <First/>  
      <Navbar/>
      <Hero/>
      <Slider/>
      <Offer/>
      <Car/>
    </>
  )
}

export default page