import React from "react";
import { FaTag } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="md:mx-[64px] mx-2 my-3 px[10px] md:my-[49px] py-[10px]">
      {/* 1 */}
      <div className="">
        <div className="flex gap-2 lg:gap-4 items-start md:items-center">
          <FaTag className="lg:text-[.975em] w-16 md:w-auto  text-[25px]" />
          <h1 className="text-[22px] font-bold">
            {" "}
            Receba uma <span className="text-[#DC3545]">
              oferta exclusiva
            </span>{" "}
            do seu novo Renault
          </h1>
        </div>
        <p className="text-[16[x]">Condições imperdíveis para você comprar o seu carro novo. Só aqui na Regence!</p>
      </div>
      {/* Table */}
      <div className="bg-[#FDB414] mt-4 max-w-[980px] pr-2 lg:pr-1">
        {/* 1 */}
    <div className=" flex flex-col lg:flex-row space-x-1 ">
       <div className="flex flex-row  lg:pr-0">
       <div className="bg-white w-full lg:w-[240px] text-[#495057]  py-[10px] flex justify-between items-center   ml-1 my-1">
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

        <div className="bg-white w-full lg:w-[240px] text-[#495057] py-[10px] flex justify-between items-center   ml-1 my-1">
                         <select name="name" id="#" className="text-[14px] text-[#495057] border-none outline-none w-full h-full ">
              <option value="pernambuco" className=" text-[13px] ">Qual a loja?</option>
              <option value="ceara" className="text-[13px]">Av Norte</option>
              <option value="ceara" className="text-[13px]">Caxangá</option>
              <option value="ceara" className="text-[13px]">Caruaru</option>
             </select>
        </div>
       </div>
        
      <div className="bg-white w-[100%] lg:w-[240px] text-[#495057] py-[10px] flex justify-between items-center   mx-1 lg:my-1">
                         <select name="name" id="#" className=" text-[14px] text-[#495057] border-none outline-none w-full h-full ">
              <option value="pernambuco" className=" text-[13px] ">Como prefere o contato?</option>
              <option value="ceara" className="text-[13px]">Por WhatsApp</option>
              <option value="ceara" className="text-[13px]">Por Telefone</option>
             </select>
        </div>
        <div className="bg-white w-full lg:w-[240px] text-[#495057] py-[10px] flex justify-between items-center   ml-1 my-1">
                         <select name="name" id="#" className="text-[14px] text-[#495057] border-none outline-none w-full h-full ">
              <option value="pernambuco" className=" text-[13px] ">Quando pretende comprar?</option>
              <option value="ceara" className="text-[13px]">Agora!</option>
              <option value="ceara" className="text-[13px]">Em até 30 dias</option>
              <option value="ceara" className="text-[13px]">Em 3 meses ou mais</option>
             </select>
        </div>
    </div>
    {/* 2 */}
    <div className="flex flex-col space-x-1">
    <div className="bg-white ml-1 w-full lg:w-[240px] text-[#495057] pr-[10px] flex items-center pl-[7px] py-[10px] mb-1">
            <p className="text-[14px]">Seu nome</p>            
        </div>
        <div className="bg-white  w-full lg:w-[240px] text-[#495057] pr-[10px] flex items-center pl-[7px] py-[10px] mb-1">
            <p className="text-[14px]">Seu e-mail</p>            
        </div>
        <div className="bg-white  w-full lg:w-[240px] text-[#495057] pr-[10px] flex items-center pl-[7px] py-[10px] mb-1">
            <p className="text-[14px]">DDD + Telefone</p>            
        </div>
        <div className="bg-[#FDB414] hover:cursor-pointer hover:bg-yellow-500 rounded-md w-full lg:w-[240px] text-[#495057] pr-[10px] flex justify-center items-center pl-[7px] py-[10px] mb-1">
            <p className="text-[16px] text-[#212925] font-bold">ENVIAR</p>            
        </div>
    </div>
      </div>
    </div>
  );
};

export default Hero;
