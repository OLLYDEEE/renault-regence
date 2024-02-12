import React from 'react'
import Image from 'next/image';
import Slider from "react-slick"
import First from "../../assets/First.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageSlider = () => {
  const settings = {
    dots: true,    
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    pauseOnHover:true,
    autoplay:true
  }
  return (

    <div className='flex items-center justify-center'>
      {/* <Slider {...settings}>
        Image
      <Image src={First} alt="" className="object-cover w-full overflow-hidden" />
      </Slider> */}
lllll    </div>
  )
}

export default ImageSlider