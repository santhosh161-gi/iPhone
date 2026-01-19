import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const AccessBox = ({ title, Header, description, image }: any) => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative rounded-4xl overflow-hidden bg-[#f5f5f7] w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl hover:scale-[1.02] transition-transform cursor-pointer duration-700 flex flex-col">

        {/* Text content */}
        <div className="flex flex-col justify-center items-center p-5 sm:p-6 md:p-8 z-10">
          <h3 className="font-bold text-black text-lg sm:text-xl md:text-2xl">{title}</h3>
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold tracking-tight text-black mt-2">{Header}</h1>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 mt-2">{description}</p>
          <button className="text-blue-500 hover:underline mt-3 inline-flex items-center text-sm sm:text-base md:text-lg">
            Shop iPhone accessories <IoIosArrowForward className="ml-1"/>
          </button>
        </div>

        {/* Image content */}
        <div className="flex justify-center items-center mt-auto p-4">
          <img 
            src={image} 
            alt="" 
            className="w-auto max-h-64 sm:max-h-72 md:max-h-80 object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default AccessBox

