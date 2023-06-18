import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='ml-[120px] mb-[500px] mt-[150px] text-[#504F59] flex flex-col'>
      <div className="flex flex-col md:flex-row gap-[60px] ">
        <div className="flex flex-col gap-5">
          <Image src="/SogeKing.png" width={151} height={40} />
          <p className='leading-6 text-[16px]  '>SogeKing is the best place <br /> to buy and rent your dream home throughout Indonesia</p>
        </div>
        <div className="">
          <h1 className='text-black text-[20px] leading-6 ' >For beginner</h1>
          <div className="flex flex-col gap-2 mt-4 ">
            <p>Our Carrer</p>
            <p>Our Carrer</p>
            <p>Our Carrer</p>
          </div>
        </div>
        <div className="">
          <h1 className='text-black text-[20px] leading-6 ' >For beginner</h1>
          <div className="flex flex-col gap-2 mt-4 ">
            <p>Our Carrer</p>
            <p>Our Carrer</p>
            <p>Our Carrer</p>
          </div>
        </div>
        <div className="">
          <h1 className='text-black text-[20px] leading-6 ' >For beginner</h1>
          <div className="flex flex-col gap-2 mt-4 ">
            <p>Our Carrer</p>
            <p>Our Carrer</p>
            <p>Our Carrer</p>
          </div>
        </div>
        <div className="">
          <h1 className='text-black text-[20px] leading-6 ' >For beginner</h1>
          <div className="flex flex-col gap-2 mt-4 ">
            <p>Our Carrer</p>
            <p>Our Carrer</p>
            <p>Our Carrer</p>
          </div>
        </div>
        <div className="">
          <h1 className='text-black text-[20px] leading-6 ' >For beginner</h1>
          <div className="flex flex-col gap-2 mt-4 ">
            <p>Our Carrer</p>
            <p>Our Carrer</p>
            <p>Our Carrer</p>
          </div>
        </div>
      </div>
      <div className="w-full items-center justify-center flex mt-[50px] mr-[140px] ">
      <p>Copyright 2023 • All Rights Reserved SogeKing by mlw.fig</p>
      </div>
    </div>
  )
}

export default Footer
