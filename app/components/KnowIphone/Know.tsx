"use client"
import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import BoxKnow from './BoxKnow'

const Know = () => {
  const [index, setIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(340) // default width

  const items = [
    {
      title: "Innovation",
      Header: "Beautiful and powerful, by design",
      description: "iPhone 17 Pro",
      image: "/innovation.jpg",
    },
    {
      title: "Cutting-edge Camera",
      Header: "Picture your best photos and videos",
      description: "iPhone 17 Pro",
      image: "/camera.jpg",
    },
    {
      title: "A17 Pro Chip",
      Header: "Super-fast performance",
      description: "iPhone 17 Pro",
      image: "/chip.jpg",
    },
    {
      title: "iOS",
      Header: "Personal, powerful and private",
      description: "iPhone 17 Pro",
      image: "/iosimg.jpg",
    },
  ]

  // Adjust card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth
      if (width < 640) setCardWidth(280) // sm
      else if (width < 1024) setCardWidth(300) // md
      else setCardWidth(100) // lg+
    }

    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  return (
    <div className="p-6 sm:p-10 lg:p-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold mb-8 sm:mb-10">
        Get to know iPhone.
      </h1>

      {/* Carousel */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => setIndex(Math.max(index - 1, 0))}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3"
        >
          <FaChevronLeft />
        </button>

        {/* Track */}
        <div
          className="flex gap-6 sm:gap-8 lg:gap-10 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (cardWidth + (window.innerWidth < 1024 ? (window.innerWidth < 640 ? 24 : 32) : 80))}px)`,
          }}
        >
          {items.map((item, i) => (
            <div key={i} className={`shrink-0 w-[${cardWidth}px]`}>
              <BoxKnow {...item} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => setIndex(Math.min(index + 1, items.length - 1))}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Know

