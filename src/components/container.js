import React from 'react'

export default function Container({ children }) {
  return (
    <main className='scroll-smooth transition-all duration-300 ease-in-out mx-auto max-w-screen-xl p-4 py-8 md:p-8 lg:p-10'>
      {children}
    </main>
  )
}
