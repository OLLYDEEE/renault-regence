import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
const First = () => {
  return (
    <div className="flex  items-center max-w-full[1440px] mx-16 pb-3">
      <div className="flex justify-between w-full pt-[10px]">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-[13px]">Regiao</h1>
                      <div className="flex justify-center items-center gap-1  ">
             <select name="name" id="#" className="px-2 text-[13px] font-[300] outline-none py-1 rounded-md border border-blue-400 focus:border-[2px] focus:border-[#ffc107]  bg-gray-100">
              <option value="pernambuco" className="text-[13px] ">PERNAMBUCO</option>
              <option value="ceara" className="text-[13px]">CEARÁ</option>
             </select>
              
            </div>
            
          
        </div>
        <div className="">
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default First;
