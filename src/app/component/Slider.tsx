"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const sliderImageRoot = "/images/home/slider";
const SLIDES = [
  `${sliderImageRoot}/1.jpg`,
  `${sliderImageRoot}/2.jpg`,
  `${sliderImageRoot}/3.jpg`,
  `${sliderImageRoot}/4.jpg`,
  `${sliderImageRoot}/5.jpg`,
  `${sliderImageRoot}/6.jpg`,
  `${sliderImageRoot}/7.jpg`,
  `${sliderImageRoot}/8.jpg`,
  `${sliderImageRoot}/9.jpg`,
  `${sliderImageRoot}/10.jpg`,
  `${sliderImageRoot}/11.jpg`,
];

export default function App() {
  return (
    <div className="relative pb-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {SLIDES.map((slide, i) => {
          return (
            <SwiperSlide key={`slider_-${i}`}>
              <Image src={slide} alt={`car_${i + 1}`} width={1920} height={704} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
