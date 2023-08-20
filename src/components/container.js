import React from 'react'

export default function Container({ children }) {
  return (
    <div className='p-6 max-w-screen-xl flex gap-4 flex-col flex-wrap items-center justify-between mx-auto text-gray-900 text-base leading-normal font-normal bg-white scroll-smooth transition-all duration-300 ease-in-out'>
      {children}
    </div>
  )
}
