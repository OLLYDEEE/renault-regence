import React from "react";
import Image from "next/image";
import test1 from '../../assets/test1.jpg'
import test2 from '../../assets/test2.jpg'
import test3 from '../../assets/test3.jpg'
import Link from "next/link";
const Testimonial = () => {
  return (
    <div className="mt-20 max-w-[540px] lg:max-w-[1220px] mx-auto px-[10px]">
      <div className="flex flex-col md:flex-row gap-4 w-fit mx-auto">
        <div className="">
          <Image src={test1} alt="" className=""/>
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-start justify-center px-6">
            <h1 className="text-[16px] font-bold">Venda Direta </h1>
          <p className="max-w-[274PX] text-[16px]">PcD, Taxista, Produtor Rural, MEI e demais segmentos.</p>
          </Link>
        </div>
        <div className="">
          <Image src={test2} alt="" className=""/>
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-start justify-center px-6">
            <h1 className="text-[16px] font-bold">Consórcio </h1>
          <p className="max-w-[274PX] text-[16px]">Confira os melhores planos de consórcio para você adquirir o seu Renault.</p>
          </Link>
        </div>
        <div className="">
          <Image src={test3} alt="" className=""/>
          <Link href="/" className="py-4 flex flex-col  cursor-pointer hover:underline items-start justify-center px-6">
            <h1 className="text-[16px] font-bold">Serviços   </h1>
          <p className="max-w-[274PX] text-[16px]">Mantenha seu Renault sempre como novo com os serviços Regence.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
