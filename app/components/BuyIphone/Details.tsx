"use client"
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Details = ({ open, onClose, details }: any) => {
  if (!open) return null; // ✅ important

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-xl bg-black/50'>
      <div className='relative w-full max-w-3xl bg-white rounded-3xl p-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[15px] font-semibold opacity-50'>{details.title}</h1>

          <button onClick={onClose} className='text-gray-400 hover:text-gray-600'>
            <FaTimes />
          </button>
        </div>
        <h1 className='text-[30px] font-semibold tracking-tight'>{details.Header}</h1>

        <p className='mt-4 text-gray-600'>
          {details.description}
        </p>
      </div>
    </div>
  )
}

export default Details
