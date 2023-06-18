import Image from "next/image";
import React from "react";
import Input from "./Input";

const Hero = () => {
  return (
    <div className="ml-[120px] flex flex-col h-auto ">
      <div className="flex flex-col items-center lg:flex-row ">
        <div className="mt-[104px] flex flex-col w-[458px] lg:w-[558px] flex-wrap ">
          <h1 className="font-semibold text-[75px]   ">
            Let’s start the search for your dream home!
          </h1>
          <p className="mt-10 text-[18px] ">
            Your dream home awaits! This stunning property features all the
            amenities and comfort you desire.
          </p>
          <div className="flex flex-col mt-20">
            <h1 className="font-bold text-[24px] ">Our Partnership</h1>
            <div className="flex mt-4 gap-4 ">
              <Image src="/Airbnb.png" width={127} height={40} alt="hero" />
              <Image src="/Traveloka.png" width={127} height={40} alt="hero" />
              <Image src="/Pegi.png" width={127} height={40} alt="hero" />
            </div>
          </div>
        </div>
        <div className="mr-3 mt-3 ">
          <Image src="/Home.png" width={716} height={772} alt="home" />
        </div>
       
      </div>
      <div className="w-full h-20 ">
        <form className=" flex flex-col lg:flex-row items-center  border shadow-2xl rounded gap-20  h-auto lg:h-[124px]  bg-white z-10 " >
          <Input/>
          <Input/>
          <Input/>
          <div className="flex ml-20 lg:ml-0 items-center justify-center mr-5 ">
          <button className=" bg-[#1B00EA] text-white flex w-[156px] mr-12 items-center justify-center h-[64px] rounded   ">Search</button></div>
        </form>
      </div> 
    </div>
  );
};

export default Hero;
