import React from 'react'
import StyleProvider from '../context/StyleProvider'
import TestimonalCard from "./TestimonalCard"
const Testimonal = () => {
  return (
    <StyleProvider >
    <div className='mt-[100px] '>
      <div className="flex justify-between ">
        <h1 className='text-[48px] leading-[48px] font-medium '>Our Testimonals</h1>
        <p className='text-[#504F59] text-[18px] leading-5 '>See all &rarr;</p>
      </div>
      <div className="mt-[30px]  flex flex-wrap gap-x-[34px] gap-y-[50px] justify-center  ">
      <TestimonalCard/>
      <TestimonalCard/>
      <TestimonalCard/>
      <TestimonalCard/>
      
      </div>
    </div>
    </StyleProvider>
  )
}

export default Testimonal
