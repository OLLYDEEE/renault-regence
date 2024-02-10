import React from "react";
import { FaRegClock } from "react-icons/fa6";
import Image from "next/image";
import car1 from "../assets/car1.png"
import car2 from "../assets/car2.jpg"
import car3 from "../assets/car3.png"
import car4 from "../assets/car4.png"
import car5 from "../assets/car5.png"
import car6 from "../assets/car6.jpg"
import car7 from "../assets/car7.png"
import car8 from "../assets/car8.png"

const Offer = () => {
  return (
    <div className="mx-[64px] mt-10 cursor-pointer">
      <div className="flex justify-center items-center ">
        <h1 className="text-[28px] text-center font-[600]">
          Ofertas especiais para <span className="font-bold ">você</span>
        </h1>
      </div>
     
     <div className="flex flex-1  items-start justify-center flex-wrap gap-5">
      {/* 1 */}
     <div className="mt-10 flex">
        <div className="h-auto w-[250px] pb-10">
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
<button 
className="bg-[#FDB414] w-full font-bold hover:cursor-pointer text-[16px] hover:bg-yellow-500 rounded-md  text-[#212529] 
pr-[10px] flex justify-center items-center pl-[7px] py-4 mb-2">MAIS DETALHES</button>
          </div>
        </div>                
      </div>

      <div className="mt-10 flex">
        <div className="h-auto w-[250px] ">
          <div className="w-full h-full rounded-md flex flex-col items-center px-2 border">
            <div className="bg-[#DC3545] px-2 py-[2px] flex mt-4 rounded-xl items-center gap-1  text-white justify-center">
              <FaRegClock className="font-light" />
              <p className="font-semibold text-[12px]">Expira em 18 DIAS</p>
            </div>
            <div className="mt-4 py-4">
              <Image src={car2} alt="car1" className="object-contain hover:scale-110 duration-300"/>
            </div>
           <p className="uppercase text-[1rem] mt-4 font-bold text-center w-[208px]">
           OROCH OUTSIDER 1.3 TURBO 2024 1º LUGAR EM SATISFAÇÃO DOS <br /> CLIENTES. (Fonte: <br /> Google)</p>
         <div className="mt-8 border-t w-full border-[#FFC107]"></div>
         <p className="text-[12.8px] text-[#222222] py-[10px] mt-8 text-center">SÓ A CONCESSIONÁRIA RENAULT REGENCE COM O MELHOR ATENDIMENTO DO BRASIL GARANTE O MELHOR NEGÓCIO! COBRIMOS QUALQUER OFERTA DA CONCORRÊNCIA.
SÓ NA REGENCE VOCÊ CONDIÇÕES ESPECIAIS: 
* PRIMEIRA PARCELA PARA NOVEMBRO DE 2024
* TAXA 0%
* SUPER VALORIZAÇÃO NO SEU USADO
* 03 REVISÕES INCLUSAS 
* PARCELAS A PARTIR DE R$ 1.399,00
</p>
<div className="mt-8 border-t w-full border-[#FFC107]"></div>
<div className="space-y-3 text-center my-8">
  <p className="text-[16px] text-[#6C757D]"><del>DE R$71.190,00</del></p>
  <p className="text-[16px] text-[#6C757D] font-bold">POR APENAS</p>
  <p className="text-[#212529] text-[25px] font-bold">R$63.990,00</p>
</div>
<button 
className="bg-[#FDB414] w-full font-bold hover:cursor-pointer text-[16px] hover:bg-yellow-500 rounded-md  text-[#212529] 
pr-[10px] flex justify-center items-center pl-[7px] py-4 mb-2">MAIS DETALHES</button>
          </div>
        </div>                
      </div>

      <div className="mt-10 flex">
        <div className="h-auto w-[250px] ">
          <div className="w-full h-full rounded-md flex flex-col items-center px-2 border">
            <div className="bg-[#DC3545] px-2 py-[2px] flex mt-4 rounded-xl items-center gap-1  text-white justify-center">
              <FaRegClock className="font-light" />
              <p className="font-semibold text-[12px]">Expira em 18 DIAS</p>
            </div>
            <div className="mt-4 py-4">
              <Image src={car3} alt="car1" className="object-contain hover:scale-110 duration-300"/>
            </div>
           <p className="uppercase text-[1rem] mt-4 font-bold text-center w-[208px]">
           RENAULT STEPWAY ZEN 1.6 1º LUGAR EM SATISFAÇÃO DOS CLIENTES. (Fonte: Google)</p>
         <div className="mt-8 border-t w-full border-[#FFC107]"></div>
         <p className="text-[12.8px] text-[#222222] py-[10px] mt-8 text-center"> SÓ A CONCESSIONÁRIA RENAULT REGENCE COM O MELHOR ATENDIMENTO DO BRASIL GARANTE O MELHOR NEGÓCIO! COBRIMOS QUALQUER OFERTA DA CONCORRÊNCIA. 
SÓ NA REGENCE VOCÊ CONDIÇÕES ESPECIAIS: 
* OPERAÇÃO LIMPA PATIO( PREÇO COM MAIS DE R$ 15.000,00 DE DESCONTO)
* PRIMEIRA PARCELA PARA JANEIRO DE 2025
* SUPER VALORIZAÇÃO NO SEU USADO
*  03 REVISÕES INCLUSAS
 

</p>
<div className="mt-8 border-t w-full border-[#FFC107]"></div>
<div className="space-y-3 text-center my-8">
  <p className="text-[16px] text-[#6C757D]"><del>DE R$71.190,00</del></p>
  <p className="text-[16px] text-[#6C757D] font-bold">POR APENAS</p>
  <p className="text-[#212529] text-[25px] font-bold">R$63.990,00</p>
</div>
<button 
className="bg-[#FDB414] w-full font-bold hover:cursor-pointer text-[16px] hover:bg-yellow-500 rounded-md  text-[#212529] 
pr-[10px] flex justify-center items-center pl-[7px] py-4 mb-2">MAIS DETALHES</button>
          </div>
        </div>                
      </div>

      <div className="mt-10 flex">
        <div className="h-auto w-[250px] ">
          <div className="w-full h-full rounded-md flex flex-col items-center px-2 border">
            <div className="bg-[#DC3545] px-2 py-[2px] flex mt-4 rounded-xl items-center gap-1  text-white justify-center">
              <FaRegClock className="font-light" />
              <p className="font-semibold text-[12px]">Expira em 18 DIAS</p>
            </div>
            <div className="mt-4 py-4">
              <Image src={car4} alt="car1" className="object-contain hover:scale-110 duration-300"/>
            </div>
           <p className="uppercase text-[1rem] mt-4 font-bold text-center w-[208px]">
           RENAULT STEPWAY ZEN 1.0 1º LUGAR EM SATISFAÇÃO DOS CLIENTES. (Fonte: Google)</p>
         <div className="mt-8 border-t w-full border-[#FFC107]"></div>
         <p className="text-[12.8px] text-[#222222] py-[10px] mt-8 text-center"> SÓ A CONCESSIONÁRIA RENAULT REGENCE COM O MELHOR ATENDIMENTO DO BRASIL GARANTE O MELHOR NEGÓCIO! COBRIMOS QUALQUER OFERTA DA CONCORRÊNCIA. 
SÓ NA REGENCE VOCÊ CONDIÇÕES ESPECIAIS: 
* OPERAÇÃO LIMPA PATIO( PREÇO COM MAIS DE R$ 15.000,00 DE DESCONTO)
* PRIMEIRA PARCELA PARA JANEIRO DE 2025
* SUPER VALORIZAÇÃO NO SEU USADO
*  03 REVISÕES INCLUSAS
 

</p>
<div className="mt-8 border-t w-full border-[#FFC107]"></div>
<div className="space-y-3 text-center my-8">
  <p className="text-[16px] text-[#6C757D]"><del>DE R$71.190,00</del></p>
  <p className="text-[16px] text-[#6C757D] font-bold">POR APENAS</p>
  <p className="text-[#212529] text-[25px] font-bold">R$63.990,00</p>
</div>
<button 
className="bg-[#FDB414] w-full font-bold hover:cursor-pointer text-[16px] hover:bg-yellow-500 rounded-md  text-[#212529] 
pr-[10px] flex justify-center items-center pl-[7px] py-4 mb-2">MAIS DETALHES</button>
          </div>
        </div>                
      </div>

      <div className="mt-10 flex">
        <div className="h-auto w-[250px] ">
          <div className="w-full h-full rounded-md flex flex-col items-center px-2 border">
            <div className="bg-[#DC3545] px-2 py-[2px] flex mt-4 rounded-xl items-center gap-1  text-white justify-center">
              <FaRegClock className="font-light" />
              <p className="font-semibold text-[12px]">Expira em 18 DIAS</p>
            </div>
            <div className="mt-4 py-4">
              <Image src={car5} alt="car1" className="object-contain hover:scale-110 duration-300"/>
            </div>
           <p className="uppercase text-[1rem] mt-4 font-bold text-center w-[208px]">
           KWID INTENSE 2024 REGENCE 1º LUGAR EM SATISFAÇÃO DOS CLIENTES. (Fonte: Google)</p>
         <div className="mt-8 border-t w-full border-[#FFC107]"></div>
         <p className="text-[12.8px] text-[#222222] py-[10px] mt-8 text-center">SÓ A CONCESSIONÁRIA RENAULT REGENCE COM O MELHOR ATENDIMENTO DO BRASIL GARANTE O MELHOR NEGÓCIO! COBRIMOS QUALQUER OFERTA DA CONCORRÊNCIA.
OFERTA ESPECIAL:
* TAXA ZERO DE 0,99% EM  48X SÓ COM 30% DE ENTRADA!!!!
* entrada em ate 18x no cartão
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
<button 
className="bg-[#FDB414] w-full font-bold hover:cursor-pointer text-[16px] hover:bg-yellow-500 rounded-md  text-[#212529] 
pr-[10px] flex justify-center items-center pl-[7px] py-4 mb-2">MAIS DETALHES</button>
          </div>
        </div>                
      </div>

      <div className="mt-10 flex">
        <div className="h-auto w-[250px] ">
          <div className="w-full h-full rounded-md flex flex-col items-center px-2 border">
            <div className="bg-[#DC3545] px-2 py-[2px] flex mt-4 rounded-xl items-center gap-1  text-white justify-center">
              <FaRegClock className="font-light" />
              <p className="font-semibold text-[12px]">Expira em 18 DIAS</p>
            </div>
            <div className="mt-4 py-4">
              <Image src={car6} alt="car1" className="object-contain hover:scale-110 duration-300"/>
            </div>
           <p className="uppercase text-[1rem] mt-4 font-bold text-center w-[208px]">
           OROCH INTENSE MT 2024 1º LUGAR EM SATISFAÇÃO DOS CLIENTES. (Fonte: Google)</p>
         <div className="mt-8 border-t w-full border-[#FFC107]"></div>
         <p className="text-[12.8px] text-[#222222] py-[10px] mt-8 text-center">A Renault Oroch 2023 traz mais força, mais robustez e mais conforto para seu o dia a dia. Ela vem equipada com motor turbo TCe 1.3 flex de 170 cv, multimídia flutuante de 8” com espelhamento sem fio, suspensão Multilink, caçamba com capacidade para até 680kg e amplo espaço interno para 5 ocupantes. Uma picape feita para você ir além. 
CONDIÇOES EXCLUSIVAS REGENCE:
* PRIMEIRA PARCELA PARA JANEIRO DE 2025 ou
* TAXA 0% EM 24 X
</p>
<div className="mt-8 border-t w-full border-[#FFC107]"></div>
<div className="space-y-3 text-center my-8">
  <p className="text-[16px] text-[#6C757D]"><del>DE R$71.190,00</del></p>
  <p className="text-[16px] text-[#6C757D] font-bold">POR APENAS</p>
  <p className="text-[#212529] text-[25px] font-bold">R$63.990,00</p>
</div>
<button 
className="bg-[#FDB414] w-full font-bold hover:cursor-pointer text-[16px] hover:bg-yellow-500 rounded-md  text-[#212529] 
pr-[10px] flex justify-center items-center pl-[7px] py-4 mb-2">MAIS DETALHES</button>
          </div>
        </div>                
      </div>

      <div className="mt-10 flex">
        <div className="h-auto w-[250px] ">
          <div className="w-full h-full rounded-md flex flex-col items-center px-2 border">
            <div className="bg-[#DC3545] px-2 py-[2px] flex mt-4 rounded-xl items-center gap-1  text-white justify-center">
              <FaRegClock className="font-light" />
              <p className="font-semibold text-[12px]">Expira em 18 DIAS</p>
            </div>
            <div className="mt-4 py-4">
              <Image src={car7} alt="car1" className="object-contain hover:scale-110 duration-300"/>
            </div>
           <p className="uppercase text-[1rem] mt-4 font-bold text-center w-[208px]">
           KWID ZEN 2024 É NA REGENCE É 1º Lugar no Google, os clientes mais felizes!</p>
         <div className="mt-8 border-t w-full border-[#FFC107]"></div>
         <p className="text-[12.8px] text-[#222222] py-[10px] mt-8 text-center">SÓ A CONCESSIONÁRIA RENAULT REGENCE COM O MELHOR ATENDIMENTO DO BRASIL GARANTE O MELHOR NEGÓCIO! COBRIMOS QUALQUER OFERTA DA CONCORRÊNCIA.
OFERTA ESPECIAL:
* Entrada R$ 18.990,00 + 48 parcelas de  R$ 1.199,00 + parc final .Taxa de acordo com o CPF.
* entrada em ate 21x no cartão
* consulte condições na loja 
* imagens meramente ilustrativas
* cadastro sujeito a aprovação.
</p>
<div className="mt-8 border-t w-full border-[#FFC107]"></div>
<div className="space-y-3 text-center my-8">
  <p className="text-[16px] text-[#6C757D]"><del>DE R$71.190,00</del></p>
  <p className="text-[16px] text-[#6C757D] font-bold">POR APENAS</p>
  <p className="text-[#212529] text-[25px] font-bold">R$63.990,00</p>
</div>
<button 
className="bg-[#FDB414] w-full font-bold hover:cursor-pointer text-[16px] hover:bg-yellow-500 rounded-md  text-[#212529] 
pr-[10px] flex justify-center items-center pl-[7px] py-4 mb-2">MAIS DETALHES</button>
          </div>
        </div>                
      </div>

      <div className="mt-10 flex items-start ">
        <div className="h-auto w-[250px] ">
          <div className="w-full h-full rounded-md flex flex-col items-center px-2 border space-y-12">
            <div className="bg-[#DC3545] px-2 py-[2px] flex mt-4 rounded-xl items-center gap-1  text-white justify-center">
              <FaRegClock className="font-light" />
              <p className="font-semibold text-[12px]">Expira em 18 DIAS</p>
            </div>
            <div className="mt-4 py-4">
              <Image src={car8} alt="car1" className="object-contain hover:scale-110 duration-300"/>
            </div>
           <p className="uppercase text-[1rem] mt-4 font-bold text-center w-[208px]">
           MÉGANE E-TECH 100% ELÉTRICO</p>
         <div className="mt-8 border-b w-full border-[#FFC107]"></div>
      
       <p className="text-[12.8px]  text-[#222222] py-[10px] mt-6 mb flex items-center justify-center text-center">
        Venha fazer um Test-Drive no Mégane E-Tech e sinta o futuro em suas mãos. São 220 CV de potência, tecnologia e design que vem sendo destaque em todas as revistas e sites especializados.
</p>

<div className="mt-8 border-t w-full border-[#FFC107]"></div>
<div className="space-y-3 text-center my-8">
  <p className="text-[16px] text-[#6C757D]"><del>DE R$71.190,00</del></p>
  <p className="text-[16px] text-[#6C757D] font-bold">POR APENAS</p>
  <p className="text-[#212529] text-[25px] font-bold">R$63.990,00</p>
</div>
<button 
className="bg-[#FDB414] w-full font-bold hover:cursor-pointer text-[16px] hover:bg-yellow-500 rounded-md  text-[#212529] 
pr-[10px] flex justify-center items-center pl-[7px] py-4 mb-2">MAIS DETALHES</button>
          </div>
        </div>                
      </div>
     </div>
      
    </div>
  );
};

export default Offer;
