import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[94px] flex justify-between items-center gap-[184px] '>
     
     <img src="/SogeKing.png" alt="" />
    
      <ul className='gap-10 hidden xl:flex'>
        <li><a href="#">Home</a></li>
        <li><a href="/about" className='flex gap-2'>About  <span>Us</span></a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Services</a></li>
      </ul>
      <div className="flex flex-col  sm:flex-row   gap-4  ">
        <button>Register</button>
        <button className='bg-[#1B00EA] text-white w-[142px]  h-[40px] rounded '>Login</button>
      </div>
    </div>
  )
}

export default Navbar
