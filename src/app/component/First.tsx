import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
const First = () => {
  return (
    <div className="flex  items-center max-w-full[1440px] mx-10">
      <div className="flex justify-between w-full pt-[10px]">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-[13px]">Regiao</h1>
          <div className="">
            <div className="flex justify-center items-center gap-1 bg-gray-100 px-2 py-1 border border-[#ced4da] rounded-md">
              <p className="text-[13px]">PERNAMBUCO</p>
              <FaAngleDown className="font-normal" />{" "}
            </div>
            <div className="bg-gray-100 hidden justify-center items-center flex-col ">
            <p className="text-[13px] hover:bg-blue-800 ">PERNAMBUCO</p>
            <p className="text-[13px]">PERNAMBUCO</p>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default First;
