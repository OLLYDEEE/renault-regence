import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
const First = () => {
  return (
    <div className=" flex items-center pl-2 w-[100%] px-2 md:px-6 pb-3">
      <div className="flex justify-between items-center w-full  pt-[10px]">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-[13px]">Regiao</h1>
                      <div className="flex justify-center items-center gap-1  ">
             <select name="name" id="" className="md:px-2 text-[13px] font-[300] outline-none py-1 rounded-md border border-[#6c757d] focus:border-[2px] focus:border-[#ffc107]  bg-gray-100">
              <option value="pernambuco" className=" text-[13px] ">PERNAMBUCO</option>
              <option value="ceara" className="text-[13px]">CEARÁ</option>
             </select>             
            </div> 
        </div>
        <div className="flex items-center justify-start ">
          <Image src={logo} alt="logo" className="object-contain w-[52px] md:w-[84px]" />
        </div>
      </div>
    </div>
  );
};

export default First;
