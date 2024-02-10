import React from "react";
import { FaRegClock } from "react-icons/fa6";
import Image from "next/image";
import car1 from "../assets/car1.png"

const Offer = () => {
  return (
    <div className="mx-[64px] mt-10 cursor-pointer">
      <div className="flex justify-center items-center ">
        <h1 className="text-[28px] text-center font-[600]">
          Ofertas especiais para <span className="font-bold ">você</span>
        </h1>
      </div>
      <div className="mt-10">
        <div className="h-auto max-w-[250px] pb-10">
          <div className="w-full h-full rounded-md flex flex-col items-center px-2 border">
            <div className="bg-[#DC3545] px-2 py-[2px] flex mt-4 rounded-xl items-center gap-1  text-white justify-center">
              <FaRegClock className="font-light" />
              <p className="font-semibold text-[12px]">Expira em 18 DIAS</p>
            </div>
            <div className="mt-4 py-4">
              <Image src={car1} alt="car1" className="object-contain hover:scale-110 duration-300"/>
            </div>
           <p className="uppercase text-[16px] mt-4 font-bold text-center">KWID ZEN 2024 É NA REGENCE É 1º Lugar no Google, os clientes mais felizes!</p>
         <div className="mt-8 border-t w-full border-[#FFC107]"></div>
         <p className="text-[12.8px] text-[#222222] py-[10px] mt-8 text-center">SÓ A CONCESSIONÁRIA RENAULT REGENCE COM O MELHOR ATENDIMENTO DO BRASIL GARANTE O MELHOR NEGÓCIO! COBRIMOS QUALQUER OFERTA DA CONCORRÊNCIA.
OFERTA ESPECIAL:
* Entrada R$ 0% + 60 x  R$ 1.699,00
* entrada em ate 21x no cartão
* consulte condições na loja 
* imagens meramente ilustrativas
* cadastro sujeito a aprovação
</p>
<div className="mt-8 border-t w-full border-[#FFC107]"></div>
<div className="space-y-3 text-center my-8">
  <p className="text-[16px] text-[#6C757D]"><del>DE R$71.190,00</del></p>
  <p className="text-[16px] text-[#6C757D] font-bold">POR APENAS</p>
  <p className="text-[#212529] text-[25px] font-bold">R$63.990,00</p>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
