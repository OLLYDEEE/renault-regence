import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const TopBar = () => {
  return (
    <div className="h-[50px] flex items-center px-[10px] w-[100%] max-w-[540px] lg:max-w-[1220px] mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-[13px]">Regiao</h1>
          <div className="flex justify-center items-center gap-1  ">
            <select
              title="PERNAMBUCO"
              name="name"
              id=""
              className="md:px-2 text-[13px] font-[300] outline-none py-1 rounded-md border border-[#6c757d] focus:border-[2px] focus:border-[#ffc107]  bg-gray-100"
            >
              <option value="pernambuco" className=" text-[13px] ">
                PERNAMBUCO
              </option>
              <option value="ceara" className="text-[13px]">
                CEARÁ
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-start ">
          <Image
            src={logo}
            alt="logo"
            className="object-contain w-[52px] md:w-[84px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
