"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

import Modal from "../home/Modal";
import Logar from "./Logar";
const Last = () => {
  const [modal, setModal] = useState(false);
  const [first, setFirst] = useState(false)
  return (
    <>
     <div className="">
        <div className={`${first ? "block" : "hidden"}`}>
          <Logar setFirst={setFirst} />
        </div>
      </div>
      <div className="">
        <div className={`${modal ? "block" : "hidden"}`}>
          <Modal setModal={setModal} />
        </div>
      </div>

      <div className="flex lg:hidden items-end justify-center w-full rounded-b fixed h-auto bottom-0 z-[9999]">
        <Link onClick={() => setFirst((prev) => !prev)}
          href="/"
          className="w-[52%] bg-[#dddad4] text-black flex flex-col items-center justify-center gap-1 py-5 text-[14px]"
        >
          <FaPhone className="text-[16px]" />
          <p className="font-[400] uppercase">
            <span className="font-bold font-sans text-[14px]">LIGAR</span>
          </p>
        </Link>

        
          
            <Link onClick={() => setModal((prev) => !prev)}
              href=""
              className="w-[58%] bg-[#50C871] text-white flex py-5 flex-col items-center justify-center gap-1 text-[14px]"
            >
              <FaWhatsapp className="text-[16px]" />
              <p className="font-[400] uppercase">
                <span className="font-bold text-[14px] font-sans">
                  WhatsApp
                </span>
              </p>
            </Link>
          </div>
       
    
    </>
  );
};
export default Last;
