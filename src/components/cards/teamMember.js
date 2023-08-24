import React from 'react'
import Image from 'next/image'

export default function TeamMember({ name, image, role }) {
  return (
    <div className='group bg-white p-10 text-black cursor-pointer shadow-lg rounded-xl'>
      <div className='rounded-xl gap-4 flex items-center flex-col group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300'>
        <Image
          loading='lazy'
          className='rounded-full'
          width={140}
          height={140}
          alt='Team member illustration'
          src={image}
        />
        <div className='flex flex-col gap-2 items-center'>
          <div className='font-bold text-xl'>{name}</div>
          <div className='text-base'>{role}</div>
        </div>
      </div>
    </div>
  )
}
