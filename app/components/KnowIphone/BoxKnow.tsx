import React from "react";

const BoxKnow = ({ title, Header, description, image }: any) => {
  return (
    // OUTER WRAPPER (controls radius & stacking)
    <div className="relative rounded-4xl hover:z-50 transition-all duration-300">
      
      {/* SCALE WRAPPER (this is what scales) */}
      <div className="overflow-hidden rounded-4xl transform transition-transform duration-700 hover:scale-[1.05] will-change-transform cursor-pointer">
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 p-4 sm:p-5 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <h3 className="font-bold text-white text-sm sm:text-base">
            {title}
          </h3>
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
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default BoxKnow;

