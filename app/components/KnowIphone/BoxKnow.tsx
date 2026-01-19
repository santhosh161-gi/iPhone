import React from 'react'

const BoxKnow = ({ title, Header, description, image }: any) => {
  return (
    <div className="relative rounded-4xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-700 hover:z-50">
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 p-4 sm:p-5 flex flex-col justify-end">
        <h3 className="font-bold text-white text-sm sm:text-base">{title}</h3>
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white mt-1">
          {Header}
        </h1>
        {description && (
          <p className="text-[12px] sm:text-sm text-gray-200 mt-2">
            {description}
          </p>
        )}
      </div>

      {/* Image */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default BoxKnow
