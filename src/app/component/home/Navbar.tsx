"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import alogo from "../../assets/alogo.png";
import { FaAngleRight, FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LiaBarsSolid } from "react-icons/lia";
import { FaAngleLeft } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#222] max-w-[14440px] ">
      {/* 1 */}
      <div className="md:mx-[64px] md:px[10px] pt-8 flex pb-8 justify-between  items-center">
        <div className="w-full lg:w-auto">
          <div className="flex items-center justify-between lg:w-auto w-full lg:px-0 px-6">
            <div className="flex justify-start items-center">
              <Image src={alogo} alt="alogo" className="object-contain" />
            </div>

            {/* Menu Icon */}
            <div
              onClick={() => setOpen(true)}
              className="flex text-[#ffffff80] text-[30px] border rounded-md border-[#ffffff1a] lg:hidden px-3 py-1"
            >
              <LiaBarsSolid className="text-gray-400" />
            </div>
          </div>
          {open && (
            <div className=" lg:hidden mt-10 px-4 text-white">
              <div className="flex items-start flex-col  gap-4">
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-[#FFC107]/70 text-[#FFC107]"
                  >
                    Ofertas
                  </Link>
                </div>
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-white/70 text-[#F8F9FA]"
                  >
                    Novos
                  </Link>
                </div>
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-white/70 text-[#F8F9FA]"
                  >
                    Seminovos
                  </Link>
                </div>
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-white/70 text-[#F8F9FA]"
                  >
                    Consórcio
                  </Link>
                </div>
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-white/70 text-[#F8F9FA]"
                  >
                    Carro por Assinatura
                  </Link>
                </div>
                
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-white/70 text-[#F8F9FA]"
                  >
                                      Venda Direta
                  </Link>
                </div>
                
                   <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-white/70 text-[#F8F9FA]"
                  >
                     Venda Governo
                  </Link>
                </div>
                
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-white/70 text-[#F8F9FA]"
                  >
                    Oficina
                  </Link>
                </div>
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px] hover:text-white/70 text-[#F8F9FA]"
                  >
                    Seguros
                  </Link>
                </div>
              {/* Later */}
                <div className="flex items-center gap-4 justify-start border-b w-full pb-3 border-white">
                  <FaAngleRight className="text-[10px]" />
                  <Link
                    href="/"
                    className="cursor-pointer text-[15px]  rounded-lg "
                  >
                    <select name="name" id="#" 
                    className="text-[14px] border-none hover:text-white/70 text-[#F8F9FA] bg-[#222222]  outline-none ">
            
             <option value="pernambuco" className=" text-[13px] ">Quando pretende comprar?</option>
              <option value="ceara" className="text-[13px]">Agora!</option>
              <option value="ceara" className="text-[13px]">Em até 30 dias</option>
              <option value="ceara" className="text-[13px]">Em 3 meses ou mais</option>
             
             </select>
                  </Link>
                </div>
                <div className="cursor-pointer hover:text-white/70 text-[#F8F9FA] flex justify-center items-center gap-1">
          <FaInstagram className="text-[25px]" />
          <Link href="/" className="">
            Instagram
          </Link>
        </div>
               
              </div>
              
            </div>
          )}
        </div>

        <div className="hidden items-center lg:flex justify-center gap-8">
          <div className="bg-white hover:bg-slate-200 cursor-pointer flex items-center justify-center px-4 rounded py-4">
            <div className="flex space-x-2 items-center justify-center">
              <FaPhone className="text-[25px]" />
              <p className="font-[400]">
                <span className="font-bold">LIGUE</span> AGORA
              </p>
            </div>
          </div>
          <div className="bg-[#50C871] hover:bg-green-600 text-white cursor-pointer  items-center justify-center px-4 rounded py-4">
            <div className="flex space-x-2 items-center justify-center">
              <FaWhatsapp className="text-[25px]" />
              <p className="font-[400] uppercase">
                {" "}
                Fale pelo <span className="font-bold">WhatsApp</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}

      <div className=" space-x-6 px-10 pb-4 text-white flex justify-between">
        {/* 1 */}
        <div className="lg:flex items-center hidden gap-4">
          <Link
            href="/"
            className="cursor-pointer hover:text-[#FFC107]/70 text-[#FFC107]"
          >
            Ofertas
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-white/70 text-[#F8F9FA]"
          >
            Novos
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-white/70 text-[#F8F9FA]"
          >
            Seminovos
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-white/70 text-[#F8F9FA]"
          >
            Consórcio
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-white/70 text-[#F8F9FA]"
          >
            Carro por Assinatura
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-white/70 text-[#F8F9FA]"
          >
            Venda Direta
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-white/70 text-[#F8F9FA]"
          >
            Venda Governo
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-white/70 text-[#F8F9FA]"
          >
            Oficina
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-white/70 text-[#F8F9FA]"
          >
            Seguros
          </Link>
          <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-white/70 text-[#F8F9FA]">
            <Link href="/" className="">
              Institucional
            </Link>
            <MdOutlineArrowDropDown />
          </div>
        </div>

        <div className="hidden cursor-pointer hover:text-white/70 text-[#F8F9FA] flex-col lg:flex justify-center items-center gap-1">
          <FaInstagram className="text-[25px]" />
          <Link href="/" className="">
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
