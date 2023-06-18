import React from 'react'
import StyleProvider from '../context/StyleProvider'
import Card from "./Card"
const Residents = () => {
  return (
    <StyleProvider>
    <div className='mt-[820px]  lg:mt-[100px] '>
      <div className="flex justify-between">
        <h1 className='font-medium text-[48px] leading-[48px] text-[#191726] '>Popular Residents</h1>
        <p>See all &rarr; </p>
      </div>
      <div className="relative  flex flex-wrap gap-[60px] justify-center  ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div></StyleProvider>
  )
}

export default Residents
