import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DisciplineCard({ title, link, image }) {
  return (
    <div className='group text-black cursor-pointer shadow-lg rounded-xl'>
      <div className='group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300 py-10 px-6'>
        <Link href={link}>
          <div className='bg-white flex flex-row md:flex-col gap-2 items-center justify-between md:items-start'>
            <div className='flex flex-row md:flex-col gap-2 items-center md:items-start'>
              <Image
                loading='lazy'
                width={32}
                height={32}
                sizes='100vw'
                alt='Discipline illustration'
                src={image}
              />
              <div className='text-black font-bold text-2xl'>{title}</div>
            </div>
            <div className='flex md:hidden'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                sizes='100vw'
                alt='Discipline link illustration'
                src={'/icons/next.svg'}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
