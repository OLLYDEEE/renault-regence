import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "../../assets/whatsapp.png";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
const Logar = ({ setFirst }: { setFirst: any }) => {
  return (
    <div className="block top-0 left-0 fixed h-screen z-[10] w-screen overflow-y-auto">
      <div
        className="absolute top-0 left-0 bg-black/50 cursor-pointer h-screen w-full z-[10]"
        onClick={() => {
          setFirst(false);
        }}
      ></div>

        <div className="relative z-[11] flex max-h-screen min-h-80 w-fit mx-auto mt-[10px] md:mt-10">
          <div className="bg-white rounded-lg shadow-xl w-[300px] md:min-w-[500px] md:w-full max-w-md mx-auto">
            <div className=" text-black py-4 px-6 flex justify-between border border-solid border-[#dee2e6] items-center p-4">
              <div className="flex items-center justify-center gap-2">
                <FaPhone className="text-[22px] "/>
                <p className="text-[22px] font-sans font-semibold"> Ligue agora</p>
              </div>
              <button
                type="button"
                className="text-[#6c757d] font-semibold hover:text-black text-[20px]"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setFirst(false);
                }}
              >
                ×
              </button>
            </div>
            
            <div className="modal-body overflow-auto p-3 bg-white w-full h-auto flex flex-col items-center justify-center">
        <span className="d-block w-full text-center text-[14px] mb-4 d-block lg:hidden">Escolha o telefone e clique para ligar!</span >
        <Link href="tel:81 3073-3236" className=" bg-[#DDDAD4] text-center text-[16px] px-6 py-4 font-sans btn btn-block btn-info w-full mb-2 rounded-md">
          <b className="font-bold">Central de Vendas</b> (81 3073-3236)
        </Link>
        <Link href="tel:81 3125-9150" className=" bg-[#DDDAD4] text-center text-[16px] px-6 py-4 font-sans btn btn-block btn-info w-full  mb-2 rounded-md">
          <b className="font-bold">Loja Av Norte</b> (81 3125-9150)
        </Link>
        <Link href="tel:81 3225-9600" className="btn btn-block btn-info bg-[#DDDAD4] text-center text-[16px] px-6 py-4 font-sans btn btn-block btn-info w-full  mb-2 rounded-md">
          <b className="font-bold">Loja Caxangá</b> (81 3225-9600)
        </Link>
        <Link href="tel:81 3722-8500" className="btn btn-block btn-info bg-[#DDDAD4] text-center text-[16px] px-6 py-4 font-sans btn btn-block btn-info w-full  mb-2 rounded-md">
          <b className="font-bold">Loja Caruaru</b> (81 3722-8500)
        </Link>
      </div>
    </div>
    </div>
          </div>
      
    
  );
};

export default Logar;