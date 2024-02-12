import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import foot4 from '../../assets/foot4.png'
const Service = () => {
  return (
    <div  className='flex justify-center items-center md:mx-[64px] flex-col gap-4 mb-8'>
        <div className=" text-center h-auto bg-[#DDDAD4] cursor-pointer hover:bg-[#DDDAD4]/40 mt-2 flex items-center gap-2 px-5 rounded-md py-1 justify-center">
<p className="text-[12px] ">  Resolução 4571</p>
</div>

<div className="flex items-center justify-center flex-col">
<p className="text-[12px]">© 2024 - Renault Regence</p>
<div className="flex text-[13px] gap-1 w-full flex-wrap justify-center">
    <Link href='/' className='text-[#fdb414] hover:underline'>Dúvidas e Sugestões</Link>  |  
    <Link href='/' className='hover:underline'>Fale com DPO</Link> 
    | <Link href='/'  className='hover:underline'>Política de Privacidade</Link>  | 
    <Link href='/'  className='hover:underline'>Política de Cookie</Link>  |
    <Link href='/'  className='hover:underline'>Termos de Uso</Link> 
                                    
</div>
<div className="flex items-center justify-center mt-4">
<Image src={foot4} alt='foot4'/>
</div>
</div>
    </div>
  )
}

export default Service