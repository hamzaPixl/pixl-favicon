import React from 'react'

export default function Container({ children }) {
  return (
    <div className='py-14 px-6 max-w-screen-xl flex gap-14 flex-col flex-wrap items-center justify-between mx-auto text-base leading-normal font-normal scroll-smooth transition-all duration-300 ease-in-out'>
      {children}
    </div>
  )
}
