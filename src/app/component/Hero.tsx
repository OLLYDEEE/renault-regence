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
    <div className=" flex space-x-1 ">
        <div className="bg-white w-[240px] text-[#495057]  py-[10px] flex justify-between items-center   ml-1 my-1">
                        <select name="name" id="#" className="text-[14px] text-[#495057] border-none outline-none w-full h-full ">
              <option value="pernambuco" className=" text-[13px] ">Qual o carro?</option>
              <option value="ceara" className="text-[13px]">Kwid</option>
              <option value="ceara" className="text-[13px]">Kwid E-TECH</option>
              <option value="ceara" className="text-[13px]">Stepway</option>
              <option value="ceara" className="text-[13px]">Kangoo E-TECH</option>
              <option value="ceara" className="text-[13px]">Logan</option>
              <option value="ceara" className="text-[13px]">Duster</option>
              <option value="ceara" className="text-[13px]">Oroch</option>
              <option value="ceara" className="text-[13px]">MASTER Chassi</option>
              <option value="ceara" className="text-[13px]">MASTER Furgão</option>
              <option value="ceara" className="text-[13px]">Minubus</option>
              <option value="ceara" className="text-[13px]">Megane E-tech</option>
              
             </select>
        </div>

        <div className="bg-white w-[240px] text-[#495057] py-[10px] flex justify-between items-center   ml-1 my-1">
                         <select name="name" id="#" className="text-[14px] text-[#495057] border-none outline-none w-full h-full ">
              <option value="pernambuco" className=" text-[13px] ">Qual a loja?</option>
              <option value="ceara" className="text-[13px]">Av Norte</option>
              <option value="ceara" className="text-[13px]">Caxangá</option>
              <option value="ceara" className="text-[13px]">Caruaru</option>
             </select>
        </div>
        
      <div className="bg-white w-[240px] text-[#495057] py-[10px] flex justify-between items-center   ml-1 my-1">
                         <select name="name" id="#" className="text-[14px] text-[#495057] border-none outline-none w-full h-full ">
              <option value="pernambuco" className=" text-[13px] ">Como prefere o contato?</option>
              <option value="ceara" className="text-[13px]">Por WhatsApp</option>
              <option value="ceara" className="text-[13px]">Por Telefone</option>
             </select>
        </div>
        <div className="bg-white w-[240px] text-[#495057] py-[10px] flex justify-between items-center   ml-1 my-1">
                         <select name="name" id="#" className="text-[14px] text-[#495057] border-none outline-none w-full h-full ">
              <option value="pernambuco" className=" text-[13px] ">Quando pretende comprar?</option>
              <option value="ceara" className="text-[13px]">Agora!</option>
              <option value="ceara" className="text-[13px]">Em até 30 dias</option>
              <option value="ceara" className="text-[13px]">Em 3 meses ou mais</option>
             </select>
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
