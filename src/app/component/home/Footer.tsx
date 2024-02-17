import React from "react";
import Image from "next/image";
import foot from "../../assets/foot.png";
import foot2 from "../../assets/foot2.png";
import foot3 from "../../assets/foot3.png";

const Footer = () => {
  return (
    <div className="flex justify-center items-center container flex-col gap-4">
      <h1 className="max-w-[648px] lg:w-full text-center text-[13px] text-[#212529]">
        O Grupo ADTSA na sua Divisão de Concessionárias, é um dos maiores grupos
        automotivos do Nordeste, atuando nos estados de Alagoas , Ceará e
        Pernambuco. Conheça as principais marcas:
      </h1>
      <div className="">
        <div className="">
          <Image src={foot} alt="foot" />
        </div>
        <div className="flex items-center justify-center gap-8 mt-4">
          <Image src={foot2} alt="foot" />
          <Image src={foot3} alt="foot" />
        </div>
      </div>
      <div className="mt-8 mb-4 border-t w-full border-[#dee2e6]"></div>
    </div>
  );
};

export default Footer;
