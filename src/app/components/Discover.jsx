import React from "react";
import StyleProvider from "../context/StyleProvider";
import Image from "next/image";
const Discover = () => {
  return (
    <StyleProvider>
      <div className="mt-[520px] lg:mt-[120px] flex flex-col gap-2  justify-center lg:flex-row ">
        <div className="flex-1">
          <h1 className="text-[48px] leading-[60px] ">
            Discover your dream <br />
            home with us
          </h1>
          <p className="leading-6 mt-8 mr-[75px] ">
            We are pleased to offer house listing services and provide various{" "}
            <br />
            options and package to assist you in finding your dream home.
          </p>
          <div className="flex flex-wrap w-[400px]  gap-y-[40px] gap-x-[134px] ">
            <div className="flex flex-col mt-[60px] gap-2 ">
              <h1 className="text-[#1B00EA] text-[32px] leading-8 ">20K+</h1>
              <p className="leading-6">
                Happy costumer <br />
                with our service
              </p>
            </div>
            <div className="flex flex-col mt-[60px] gap-2">
              <h1 className="text-[#1B00EA] text-[32px] leading-8 ">20K+</h1>
              <p className="leading-6">
                Happy costumer <br />
                with our service
              </p>
            </div>
            <div className="flex flex-col mt-[60px] gap-2 ">
              <h1 className="text-[#1B00EA] text-[32px] leading-8 ">20K+</h1>
              <p className="leading-6">
                Happy costumer <br />
                with our service
              </p>
            </div>
            <div className="flex flex-col mt-[60px] gap-2 ">
              <h1 className="text-[#1B00EA] text-[32px] leading-8 ">20K+</h1>
              <p className="leading-6">
                Happy costumer <br />
                with our service
              </p>
            </div>
          </div>
          <button className="bg-[#1B00EA] rounded  mt-8 text-white w-[174px] h-[60px] ">See More</button>
        </div>
        <div className="flex-1 flex  ">
          <div className="w-[312px] md:w-[554px]   absolute h-[691px] ">
            <Image src="/img2.png" fill alt="img-2" />
          </div>
          <div className="w-[254px] md:w-[354px]  h-[531px] absolute z-10 mt-[200px] left-[35%] md:left-[45%] ">
            <Image src="/img.png" fill alt="img" />
          </div>
        </div>
      </div>
    </StyleProvider>
  );
};

export default Discover;
