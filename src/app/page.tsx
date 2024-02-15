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
import Testimonial from "./component/home/Testimonial";
import Contact from "./component/home/Contact";

const page = () => {
  return (
    <>
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
    </>
  );
};

export default page;
