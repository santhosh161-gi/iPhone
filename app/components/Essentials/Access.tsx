import React from 'react'
import AccessBox from './AccessBox'

const Access = () => {
  return (
    <div className="p-6 sm:p-10 lg:p-20 flex flex-col">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="text-3xl sm:text-4xl lg:text-[50px] font-semibold">
          iPhone essentials.
        </div>
        <div className="mt-4 sm:mt-0 text-base sm:text-lg text-blue-500 hover:underline cursor-pointer">
          All iPhone accessories.
        </div>
      </div>

      {/* Accessory Boxes */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mt-8 sm:mt-10">
        <AccessBox
          title=""
          Header="iPhone accessories"
          description="Product and personalize your iPhone with fresh accessories like colourful cases, the all-new Crossbody Strap and more."
          image="/access01.jpg"
        />
        <AccessBox
          title=""
          Header="AirTag"
          description="Attach one to your keys, wallet, or bag to find them with ease. If they go missing, you can use Find My to locate them."
          image="/access02.jpg"
        />
      </div>
    </div>
  )
}

export default Access
