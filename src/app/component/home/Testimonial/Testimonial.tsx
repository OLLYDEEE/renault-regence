"use client"
import React,  { useRef, useState } from "react";
import Image from "next/image";
import test1 from '../../../assets/test1.jpg'
import test2 from '../../../assets/test2.jpg'
import test3 from '../../../assets/test3.jpg'
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import'./styles.css';

// import required modules
import { Pagination, Keyboard } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className="mt-20 container">
      <div className="flex flex-col md:flex-row gap-4 w-fit mx-auto">
        <div className="hidden md:grid">
          <Image src={test1} alt="" className="" />
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-start justify-center px-6">
            <h1 className="text-[16px] font-bold">Venda Direta </h1>
            <p className="max-w-[274px] text-[16px]">PcD, Taxista, Produtor Rural, MEI e demais segmentos.</p>
          </Link>
        </div>
        <div className="hidden md:grid">
          <Image src={test2} alt="" className="" />
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-start justify-center px-6">
            <h1 className="text-[16px] font-bold">Consórcio </h1>
            <p className="max-w-[274px] text-[16px]">Confira os melhores planos de consórcio para você adquirir o seu Renault.</p>
          </Link>
        </div>
        <div className="hidden md:grid">
          <Image src={test3} alt="" className="" />
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-start justify-center px-6">
            <h1 className="text-[16px] font-bold">Serviços   </h1>
            <p className="max-w-[274px] text-[16px]">Mantenha seu Renault sempre como novo com os serviços Regence.</p>
          </Link>
        </div>
        <div className="flex items-center bg-white w-full md:hidden py-10 max-w-[320px]">
          <Swiper
            slidesPerView={1.5}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
          keyboard= {{
            enabled: true,
          }}

            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Keyboard]}
            className="mySwiper"
          >
<SwiperSlide>
  <div className="md:hidden w-full h-auto flex flex-col bg-white items-center justify-center ">
          <Image src={test1} alt="" className="w-[240px]" />
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-center justify-center">
            <h1 className="text-[16px] text-center  font-bold">Venda Direta </h1>
            <p className="max-w-[200px] w-full text-[16px]">PcD, Taxista, Produtor Rural, MEI e demais segmentos.</p>
          </Link>
        </div></SwiperSlide>

            <SwiperSlide ><div className="w-full h-auto flex flex-col bg-white items-center justify-center">
          <Image src={test2} alt="" className="w-[240px]" />
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-center justify-center ">
            <h1 className="text-[16px] text-center font-bold">Consórcio </h1>
            <p className="max-w-[200px] w-full text-[16px]">Confira os melhores planos de consórcio para você adquirir o seu Renault.</p>
          </Link>
        </div></SwiperSlide>
            
            <SwiperSlide>
            <div className="w-full h-auto flex flex-col bg-white items-center justify-center">
          <Image src={test3} alt="" className="w-[240px]" />
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-center justify-center ">
            <h1 className="text-[16px] text-center font-bold">Serviços   </h1>
            <p className="max-w-[200px] w-full text-[16px]">Mantenha seu Renault sempre como novo com os serviços Regence.</p>
          </Link>
        </div>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
