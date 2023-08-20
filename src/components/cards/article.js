import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function ArticleCard({ title, date, image, link = '/news', topic }) {
  return (
    <div className='group text-black cursor-pointer shadow-lg rounded-b-xl'>
      <div className='rounded-xl flex flex-col group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300'>
        <Link href={link}>
          <div className='rounded-xl h-[220px] w-auto relative'>
            <Image
              loading='lazy'
              className='m-auto rounded-t-xl'
              fill
              alt='Article illustration'
              src={image}
            />
          </div>
          <div className='bg-white flex-col gap-4 items-start py-[24px] px-6 rounded-b-xl'>
            <div className='flex-col gap-2 items-start'>
              <div className='text-primary-700 font-bold text-sm'>{topic}</div>
              <div className='text-xl font-bold'>{title}</div>
            </div>
            <div className='text-xs text-gray-400'>{date}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
