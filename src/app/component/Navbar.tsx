import React from 'react'
import Image from "next/image";
import Link from "next/link";
import alogo from "../assets/alogo.png";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-[#222] max-w-[14440px] '>
        {/* 1 */}
        <div className="mx-[64px] px[10px] pt-8 flex pb-8 justify-between items-center">
            <div className="">
            <Image src={alogo} alt="alogo" className='object-contain'/>
            </div>
          
           <div className="flex items-center justify-center gap-8"> 
           <div className="bg-white hover:bg-slate-200 cursor-pointer flex items-center justify-center px-4 rounded py-4">
                <div className="flex space-x-2 items-center justify-center">
                <FaPhone className='text-[25px]'/>
                <p className='font-[400]'><span className='font-bold'>LIGUE</span> AGORA</p>
                </div>                
            </div>
            <div className="bg-[#50C871] hover:bg-green-600 text-white cursor-pointer flex items-center justify-center px-4 rounded py-4">
                <div className="flex space-x-2 items-center justify-center">
                <FaWhatsapp className='text-[25px]'/>
                <p className='font-[400] uppercase'> Fale pelo <span className='font-bold'>WhatsApp</span></p>
                </div>                
            </div>
            </div>
        </div>
        {/* 2 */}
      
        <div className="mx-[64px] px[10px] pb-4 text-white flex justify-between">
          {/* 1 */}
<div className="flex items-center gap-6">
  <Link href="/" className='cursor-pointer hover:text-[#FFC107]/70 text-[#FFC107]' >Ofertas</Link>
  <Link href="/" className='cursor-pointer hover:text-white/70 text-[#F8F9FA]' >Novos</Link>
  <Link href="/" className='cursor-pointer hover:text-white/70 text-[#F8F9FA]' >Seminovos</Link>
  <Link href="/" className='cursor-pointer hover:text-white/70 text-[#F8F9FA]' >Consórcio</Link>
  <Link href="/" className='cursor-pointer hover:text-white/70 text-[#F8F9FA]' >Carro por Assinatura</Link>
  <Link href="/" className='cursor-pointer hover:text-white/70 text-[#F8F9FA]' >Venda Direta</Link>
  <Link href="/" className='cursor-pointer hover:text-white/70 text-[#F8F9FA]' >Venda Governo</Link>
  <Link href="/" className='cursor-pointer hover:text-white/70 text-[#F8F9FA]' >Oficina</Link>
  <Link href="/" className='cursor-pointer hover:text-white/70 text-[#F8F9FA]' >Seguros</Link>
  <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-white/70 text-[#F8F9FA]">
  <Link href="/" className='' >Institucional</Link>
  <MdOutlineArrowDropDown  />
  </div>
  
  
</div>

<div className="cursor-pointer hover:text-white/70 text-[#F8F9FA] flex justify-center items-center gap-1">
<FaInstagram className='text-[25px]' />
<Link href="/" className='' >Instagram</Link>
</div>
        </div>
    </div>
  )
}

export default Navbar