import React from 'react'
import Image from "next/image";
import alogo from "../assets/alogo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="mt-20  bg-[#222] h-[350px] mb-8">
       <div className="mx-[64px] px[10px] px-10 py-10 ">
     
       
        <div className="flex space-x-20">
        <div className="flex items-center justify-center  mt-8 pt-10">
        <Image src={alogo} alt="alogo" className='object-contain'/>
        </div>
        
        <div className="flex flex-col">
        <div className="flex justify-start ">
         <h1 className="uppercase text-white font-bold">lojas</h1>
      </div>
      <div className="flex justify-center items-center mt-8 w-full lg:space-x-12 ">
<div className="flex flex-col justify-center items-start">
<div className="flex gap-2 justify-center items-center">
<FaMapMarkerAlt className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">Av Norte</h1>
</div>
<p className="max-w-[212px] ml-4 mt-2 text-[12.8px] text-white">Av. Norte Miguel Arraes de Alencar, 2160, Encruzilhada - Recife/PE - 52021-020</p>

<div className="flex gap-2 justify-center mt-2 items-center">
<FaPhone className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">81 3125-9150</h1>
</div>
<div className="flex gap-2 justify-center mt-2 items-center">
<FaPhone className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">81 99161-3406</h1>
</div>

<div className="max-w-[212px] w-full text-center h-auto bg-[#DDDAD4] hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
<FaRegClock className='text-[12px]'/>
<p className="text-[12px] "> Horário de Funcionamento</p>
</div>

<div className="max-w-[188px] w-full text-center h-auto bg-[#DDDAD4]  hover:bg-[#DDDAD4]/80 mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
<FaMapLocationDot className='text-[12px]'/>
<p className="text-[12px] ">  Abrir no Google Maps</p>
</div>
</div>
<div className="flex flex-col justify-center items-start">
<div className="flex gap-2 justify-center items-center">
<FaMapMarkerAlt className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">Av Norte</h1>
</div>
<p className="max-w-[212px] ml-4 mt-2 text-[12.8px] text-white">Av. Norte Miguel Arraes de Alencar, 2160, Encruzilhada - Recife/PE - 52021-020</p>

<div className="flex gap-2 justify-center mt-2 items-center">
<FaPhone className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">81 3125-9150</h1>
</div>
<div className="flex gap-2 justify-center mt-2 items-center">
<FaPhone className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">81 99161-3406</h1>
</div>

<div className="max-w-[212px] w-full text-center h-auto hover:bg-[#DDDAD4]/80 bg-[#DDDAD4] mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
<FaRegClock className='text-[12px]'/>
<p className="text-[12px] "> Horário de Funcionamento</p>
</div>

<div className="max-w-[188px] w-full text-center h-auto  hover:bg-[#DDDAD4]/80 bg-[#DDDAD4] mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
<FaMapLocationDot className='text-[12px]'/>
<p className="text-[12px] ">  Abrir no Google Maps</p>
</div>
</div>
<div className="flex flex-col justify-center items-start">
<div className="flex gap-2 justify-center items-center">
<FaMapMarkerAlt className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">Av Norte</h1>
</div>
<p className="max-w-[212px] ml-4 mt-2 text-[12.8px] text-white">Av. Norte Miguel Arraes de Alencar, 2160, Encruzilhada - Recife/PE - 52021-020</p>

<div className="flex gap-2 justify-center mt-2 items-center">
<FaPhone className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">81 3125-9150</h1>
</div>
<div className="flex gap-2 justify-center mt-2 items-center">
<FaPhone className='text-[12px] text-[#ffc107]'/>
    <h1 className="uppercase text-[13px] font-bold text-white">81 99161-3406</h1>
</div>

<div className="max-w-[212px] w-full text-center h-auto  hover:bg-[#DDDAD4]/80 bg-[#DDDAD4] mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
<FaRegClock className='text-[12px]'/>
<p className="text-[12px] "> Horário de Funcionamento</p>
</div>

<div className="max-w-[188px] w-full text-center h-auto  hover:bg-[#DDDAD4]/80 bg-[#DDDAD4] mt-2 flex items-center gap-2 px-1 rounded-md py-1 justify-center">
<FaMapLocationDot className='text-[12px]'/>
<p className="text-[12px] ">  Abrir no Google Maps</p>
</div>
</div>
      </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Contact