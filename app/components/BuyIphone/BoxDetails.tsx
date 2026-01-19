import React from "react";

const BoxDetails = ({ title, Header, description, image }: any) => {
  return (
    <div className="w-full h-[450px]">
      <div
        className="
          bg-white rounded-3xl overflow-hidden
          transition-transform duration-500
          hover:scale-[1.02]
          cursor-pointer
          w-[260px] sm:w-[300px] lg:w-[350px]
        "
      >
        {/* TEXT */}
        <div className="p-5">
          <h3 className="text-sm font-semibold text-gray-700">
            {title}
          </h3>

          <h2
            className="
              mt-1 font-semibold tracking-tight
              text-xl sm:text-2xl lg:text-[28px]
              line-clamp-2
            "
          >
            {Header}
          </h2>

          <p
            className="
              mt-2 text-sm text-gray-600
              line-clamp-2 mb-5
            "
          >
            {description}
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full h-[180px] sm:h-[250px] lg:h-[250px] overflow-hidden ">
          <img
            src={image}
            alt={Header}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BoxDetails;
