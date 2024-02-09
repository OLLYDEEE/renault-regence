import React from "react";
import { FaTag } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mx-[64px] px[10px] my-[49px] py-[10px]">
      {/* 1 */}
      <div className="">
        <div className="flex gap-4 items-center">
          <FaTag className="text-[.975em]" />
          <h1 className="text-[22px] font-bold">
            {" "}
            Receba uma <span className="text-[#DC3545]">
              oferta exclusiva
            </span>{" "}
            do seu novo Renault
          </h1>
        </div>
        <p className="">Condições imperdíveis para você comprar o seu carro novo. Só aqui na Regence!</p>
      </div>
      {/* Table */}
      <div className="bg-[#FDB414] mt-4 max-w-[980px]  w-flex">
        {/* 1 */}
    <div className=" flex space-x-1  ">
        <div className="bg-white w-[240px] text-[#495057] pr-[10px] flex justify-between items-center pl-[7px] py-[10px] ml-1 my-1">
            <p className="text-[14px]">Qual o carro?</p>
            <FaChevronDown className="text-[14px]" />
        </div>
        <div className="bg-white w-[240px] text-[#495057] pr-[10px] flex justify-between items-center pl-[7px] py-[10px]  my-1">
            <p className="text-[14px]">Qual a loja?</p>
            <FaChevronDown className="text-[14px]" />
        </div>
        <div className="bg-white w-[240px] text-[#495057] pr-[10px] flex justify-between items-center pl-[7px] py-[10px]  my-1">
            <p className="text-[14px]">Como prefere o contato?</p>
            <FaChevronDown className="text-[14px]" />
        </div>
        <div className="bg-white w-[240px] text-[#495057] pr-[10px] flex justify-between items-center pl-[7px] py-[10px]  my-1">
            <p className="text-[14px]">Quando pretende comprar?</p>
            <FaChevronDown className="text-[14px]" />
        </div>
    </div>
    {/* 2 */}
    <div className="flex space-x-1">
    <div className="bg-white ml-1 w-[240px] text-[#495057] pr-[10px] flex items-center pl-[7px] py-[10px] mb-1">
            <p className="text-[14px]">Seu nome</p>            
        </div>
        <div className="bg-white  w-[240px] text-[#495057] pr-[10px] flex items-center pl-[7px] py-[10px] mb-1">
            <p className="text-[14px]">Seu e-mail</p>            
        </div>
        <div className="bg-white  w-[240px] text-[#495057] pr-[10px] flex items-center pl-[7px] py-[10px] mb-1">
            <p className="text-[14px]">DDD + Telefone</p>            
        </div>
        <div className="bg-[#FDB414] hover:cursor-pointer hover:bg-yellow-500 rounded-md w-[240px] text-[#495057] pr-[10px] flex justify-center items-center pl-[7px] py-[10px] mb-1">
            <p className="text-[16px] text-[#212925] font-bold">ENVIAR</p>            
        </div>
    </div>
      </div>
    </div>
  );
};

export default Hero;
