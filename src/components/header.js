import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <nav
      className={
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out bg-black text-white'
      }
    >
      <div className={`p-4 md:p-8 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex items-center justify-center'>
          <Link href={'/'} className='w-[182px] h-[56px] md:h-[70px] md:w-[228px] relative'>
            <Image loading='lazy' fill src='/logo.png' alt={`Logo`} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
