import React from 'react'

const ExploreDetails = () => {
  return (
    <div className="p-8 sm:p-12 md:p-16 bg-[#fafafc]">
      {/* Heading */}
      <div className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">iPhone</div>

      {/* Columns */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <div className="text-slate-500 text-sm sm:text-base">Explore iPhone</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">Explore All iPhone</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">iPhone 17 Pro</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">iPhone Air</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">iPhone 17</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">iPhone 16</div>
          <div className="text-slate-500 text-sm sm:text-base font-bold">iPhone 16e</div>
          <div className="text-slate-500 text-sm sm:text-base font-bold">Compare iPhone</div>
          <div className="text-slate-500 text-sm sm:text-base font-bold">Switch from Android</div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <div className="text-slate-500 text-sm sm:text-base">Shop iPhone</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">iPhone Accessories</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">Apple Trade In</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">Ways to Buy</div>
          <div className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">Personal Setup</div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <div className="text-slate-500 text-sm sm:text-base">More from iPhone</div>
          {[
            "iPhone Support","AppleCare","iOS 26","Apple Intelligence","Apps by Apple",
            "iPhone Privacy","Better with Mac","iCloud+","Wallet","Siri"
          ].map((item, idx) => (
            <div key={idx} className="text-lg sm:text-xl md:text-[20px] font-semibold text-black">{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreDetails
