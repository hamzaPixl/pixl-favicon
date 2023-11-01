import React from 'react'
import Image from 'next/image'

export default function TeamMember({ name, image }) {
  return (
    <div className='group bg-white p-10 text-black cursor-pointer shadow-lg rounded-xl'>
      <div className='rounded-xl gap-4 flex items-center flex-col group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300'>
        <div className='relative w-[140px] h-[140px]'>
          <Image
            loading='lazy'
            className='rounded-full'
            fill
            alt='Team member illustration'
            src={image}
          />
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <div className='font-bold text-xl'>{name}</div>
        </div>
      </div>
    </div>
  )
}
