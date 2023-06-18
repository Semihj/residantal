import React from 'react'

const Input = () => {
  return (
    <div className="flex items-center justify-center   w-[300px] ">
        <div className="flex flex-col w-full items-center gap-4">
    <label  className="font-medium text-[20px] ">Locations</label>
    <select name="" id="" className="text-[#504F59] gap-2">
      Select your city
      <option value="">
        Select your location
      </option>
      <option value="City1">
        City1
      </option>
      <option value="City1">
        City1
      </option>
      <option value="City1">
        City1
      </option>
    </select></div>
    <span className='font-thin text-[40px] text-[#504F59] '>|</span>
    
    </div>
  )
}

export default Input
