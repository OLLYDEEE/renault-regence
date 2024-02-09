import React from 'react'
import Image from "next/image";
import alogo from "../assets/alogo.png";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-black max-w-[14440px] '>
        {/* 1 */}
        <div className="mx-[46px] px[10px] pt-8 flex justify-between items-center">
            <div className="">
            <Image src={alogo} alt="alogo" className='object-contain'/>
            </div>
            <div className="bg-white">
                <div className="flex">
                <FaPhone />
                <p className=''><span>LIGUE</span> AGORA</p>
                </div>
                <div className="">
                <FaPhone />
                <p className=''><span>LIGUE</span> AGORA</p>
                </div>
            </div>
        </div>
        {/* 2 */}
        <div className=""></div>
    </div>
  )
}

export default Navbar