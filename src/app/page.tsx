"use client"

import React from "react";
import Navbar from "./component/home/Navbar";
import Hero from "./component/home/Hero";
import Slider from "./component/Slider";
import Offer from "./component/home/Offer";
import Car from "./component/home/Car";
import Footer from "./component/home/Footer";
import Service from "./component/home/Service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopBar from "./component/home/TopBar";
import Testimonial from "./component/home/Testimonial/Testimonial";
import Contact from "./component/home/Contact/Contact";
import Last from "./component/home/Last";


const page = () => {
  return (
    <div className="h-screen overflow-auto">   
      <TopBar />
      <Navbar />
      <Hero />
      <Slider />
      <Offer />
      <Car />
      <Testimonial />
      <Contact />
      <Footer />
      <Service />
      <Last/>
    </div>
  );
};

export default page;
