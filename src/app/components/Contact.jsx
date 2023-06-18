import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex mt-[100px] '>
        <div className="w-full relative h-[600px] justify-center items-center flex ">
         
            <Image 
            src="/rect.png"
            alt='rect'
            fill
            />
            <div className="absolute items-center  left-[5%] flex flex-col gap-20   ">
                <h1 className='text-white text-[24px] lg:text-[64px] leading-[80px]  '>Get our special prices <br /> & latest info</h1>
                <div className="w-[482px] lg:w-[700px] h-[302px] lg:h-[102px] bg-white flex flex-col lg:flex-row items-center justify-between   ">
                    <input type="email" className='w-[300px]  h-20 mr-5 lg:mr-0 lg:h-10   ml-[30px] mt-20 lg:mt-0 shadow-xl ' placeholder='Drop your email address here..' />
                    <span className=' text-[40px] hidden lg:flex font-thin mr-[30px]  mb-2 text-[#504F59]  '>|</span>
                    <button className='bg-[#1B00EA] text-white rounded-lg mb-20 lg:mb-0 w-[140px] h-[46px] mr-20 '>Subscribe</button>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Contact
