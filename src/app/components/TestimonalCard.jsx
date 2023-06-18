import Image from 'next/image'
import React from 'react'

const TestimonalCard = () => {
  return (
    <div className='w-[583px] h-[348px] ml-5 sm:h-[348px] rounded bg-white shadow-xl '>
      <div className=" flex justify-between items-center m-[20px] ">
        <div className="flex gap-4 ">
        <Image 
         src="/testimonal.png"
          width={80}
          height={80} />
         <div className="flex flex-col gap-3 ">
            <h1 className='text-[20px] leading-[20px] ' >Jane Cooper</h1>
            <p>Marketing Coordinator</p>
         </div>
         </div>
         <p>⭐ 4.9</p>
         
      </div>
      <div className="flex flex-col gap-4 m-5  ">
      <h1 className='text-[20px] leading-[20px] ' >Great Work!</h1>
        <p>“I can't thank SogeKing Real Estate Company enough for their outstanding
service. From the moment I started working with them, their team of dedicated
professionals went above and beyond to help me find my dream home.”</p>
      </div>
    </div>
  )
}

export default TestimonalCard
