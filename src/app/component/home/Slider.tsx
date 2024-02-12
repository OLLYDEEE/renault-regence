"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import First from "../../assets/First.jpg";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  const slides=[
    {
      url: "https://vscode.dev/github/OLLYDEEE/renault-regence/blob/main/src/app/assets/First.jpg"
    },
    {
      url: "https://vscode.dev/github/OLLYDEEE/renault-regence/blob/main/src/app/assets/First.jpg"
    }
  ]
 
  return (
  <section className="py-16">
<div className="mx-auto ">
<Swiper className="flex"
    spaceBetween={30}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper)=> console.log(swiper)}
    // autoplay={{
    //   delay: 2500,
    //   disableOnInteraction: false,
    // }}
    // pagination={{
    //   clickable: true,
    // }}
    // navigation={true}
    // modules={[Autoplay, Pagination, Navigation]}
    // className="mySwiper"
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
</div>
  </section>
    // <div className="max-w-[1440px] w-full">     
    //  <div className="flex w-full justify-center items-center relative ">
    //     <Image src={First} alt="" className="object-cover w-full overflow-hidden" />
    //     {/* <Image src={First} alt="" className="object-cover w-full overflow-hidden" />
    //     <Image src={First} alt="" className="object-cover w-full overflow-hidden" />
    //     <Image src={First} alt="" className="object-cover w-full overflow-hidden"  /> */}
    // <div className=""></div>
    //  </div>
    //   <div className=""></div>
    // </div>
    // <div className="w-full relative h-full">
    //   <ImageSlider slides={slides}/>
    // </div>
  );
};

export default Slider;
