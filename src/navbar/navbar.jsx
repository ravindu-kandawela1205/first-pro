import React from 'react'

function navbar() {
  return (
<div className='bg-white shadow w-full'>
  <div className="flex flex-col justify-between items-center py-4 px-20 md:flex-row ">
    <div className='font-bold text-[#1090CB] text-3xl font-poppins'>LOGO</div>
    <div>
      <ol className='flex flex-col gap-6 md:gap-16 items-center md:flex-row'>
        <li className='hover:text-[#1090CB] cursor-pointer'>Home</li>
        <li className='hover:text-[#1090CB] cursor-pointer' >About Us</li>
        <li className='hover:text-[#1090CB] cursor-pointer' >Services</li>
        <li className='hover:text-[#1090CB] cursor-pointer' >Blog</li>
        <button className='bg-[#1090CB] text-white text-[13px] cursor-pointer py-2 px-4 rounded-[6px] hover:bg-blue-600'>
          Contact Us
        </button>
      </ol>
    </div>
  </div>
</div>

  )
}

export default navbar
