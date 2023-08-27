import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function SpecialistListCard({ title, link, image, mainDiscipline }) {
  return (
    <div className='group text-black cursor-pointer shadow-lg rounded-xl'>
      <div className='group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300 py-5 px-6'>
        <Link href={link}>
          <div className='bg-white flex flex-row gap-2 items-center justify-between'>
            <div className='flex flex-row gap-2 items-center'>
              <Image
                loading='lazy'
                className='rounded-full'
                width={64}
                height={64}
                sizes='100vw'
                alt='Specialist illustration'
                src={image}
              />
              <div className='flex flex-col justify-between items-start'>
                <div className='text-black font-bold text-base md:text-xl xl:text-2xl'>{title}</div>
                <div className='text-gray-400 text-base'>{mainDiscipline}</div>
              </div>
            </div>
            <div className='flex'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                sizes='100vw'
                alt='Specialist link illustration'
                src={'/icons/next.svg'}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
