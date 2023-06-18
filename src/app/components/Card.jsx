import Image from "next/image";
import React from "react";
const Card = () => {
  return (
    <div className=" flex flex-col ml-6 w-[360px] h-[444px]  mt-10  sm:shadow-2xl items-center  ">
      <div className="w-[320px] h-[320px] absolute  ">
        <Image src="/Resident.png" alt="resident" fill />
        <div className="absolute top-[105%] w-full flex flex-col ">
          <h1 className="text-[20px] leading-5 text-#191726] ">
            Paradise Serpong City
          </h1>
          <div className="mt-4 flex   justify-between">
            <p>Pamulang, Indonesia</p>
            <p>⭐ 4.9</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
