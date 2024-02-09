import React from "react";
import Image from "next/image";
import First from "../assets/First.jpg"
const Slider = () => {
  return (
    <div className="max-w-[1440px]  my-10 mb-  ">
      <div className="">
      <Image src={First} alt="" className="object-contain"  />
      </div>

      
    </div>
  );
};

export default Slider;
