import React from 'react'
import Image from 'next/image'
import car1 from "../assets/car1.png"
import list2 from "../assets/list2.jpg"
import car3 from "../assets/car3.png"
import list4 from "../assets/list4.png"
import list5 from "../assets/list5.png"
import car5 from "../assets/car5.png"
import car6 from "../assets/car6.jpg"
import list7 from "../assets/list7.jpg"
import list8 from "../assets/list8.jpg"
import list9 from "../assets/list9.png"

const Car = () => {
  return (
    <div className='mt-20 mx-[64px] px[10px] '>
        <div className="flex justify-center pt-10 mb-[48px]">
        <h1 className="text-[28px] font-semibold ">
            Escolha o <span className=" font-bold">Renault</span> que combina com você</h1>
        </div>
        <div className="flex justify-start flex-wrap gap-1  ">
<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={car5} alt='' className='object-contain max-w-[300px] hover:scale-110 duration-300 maxh-[130px]'/>
<p className='text-[16px] font-bold'>Kwid</p>
</div>

<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={list2} alt='' className='object-contain hover:scale-110 duration-300 max-w-[300px] maxh-[130px]'/>
<p className='text-[16px] font-bold'>Kwid E-TECH</p>
</div>

<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={car3} alt='' className='object-contain hover:scale-110 duration-300 max-w-[300px] maxh-[130px]'/>
<p className='text-[16px] font-bold'>Stepway</p>
</div>

<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={list4} alt='' className='object-contain hover:scale-110 duration-300 max-w-[300px] maxh-[130px]'/>
<p className='text-[16px] font-bold'>Kangoo E_TECH</p>
</div>

<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={list5} alt='' className='object-contain hover:scale-110 duration-300 max-w-[300px] maxh-[130px]'/>
<p className='text-[16px] font-bold'>Duster</p>
</div>

<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={car6} alt='' className='object-contain hover:scale-110 duration-300 max-w-[300px] maxh-[130px]'/>
<p className='text-[16px] font-bold'>Oroch</p>
</div>

<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={list7} alt='' className='object-contain hover:scale-110 duration-300 max-w-[300px] maxh-[130px]'/>
<p className='text-[16px] font-bold'>MASTER Chassi</p>
</div>

<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={list8} alt='' className='object-contain hover:scale-110 duration-300 max-w-[300px] maxh-[130px]'/>
<p className='text-[18px] font-bold'>MASTER Furgao</p>
</div>

<div className="flex justify-center items-center flex-col gap-4 mb-4">
<Image src={list9} alt='' className='object-contain max-w-[300px] maxh-[130px]'/>
<p className='text-[16px] font-bold'>Megane E-TECH</p>
</div>

        </div>
    </div>
  )
}

export default Car