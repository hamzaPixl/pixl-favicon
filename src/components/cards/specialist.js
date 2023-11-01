import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'

export function SpecialistListCard({ specialist }) {
  const { t } = useTranslate()
  return (
    <div className='group text-black cursor-pointer shadow-lg rounded-xl'>
      <div className='group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300 py-5 px-6'>
        <Link href={specialist.link}>
          <div className='bg-white flex flex-row gap-2 items-center justify-between'>
            <div className='flex flex-row gap-2 items-center'>
              <Image
                loading='lazy'
                className='rounded-full'
                width={64}
                height={64}
                sizes='100vw'
                alt='Specialist illustration'
                src={specialist.avatar}
              />
              <div className='flex flex-col justify-between items-start'>
                <div className='text-black font-bold text-base md:text-xl xl:text-2xl'>{`${specialist.title} ${specialist.firstName} ${specialist.lastName}`}</div>
                <div className='text-gray-400 text-base'>
                  {t(`disciplines.${specialist.mainDiscipline}.title`)}
                </div>
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

export function SpecialistListCardDisciplineDetail({ specialist }) {
  const { t } = useTranslate()
  return (
    <div className='group text-black cursor-pointer shadow-lg rounded-xl'>
      <div className='group-hover:transition-all group-hover:scale-105 group-hover:duration-300 duration-300 py-5 px-6'>
        <Link href={specialist.link}>
          <div className='bg-white flex flex-row gap-2 items-center justify-between'>
            <div className='flex flex-row gap-2 items-center'>
              <Image
                loading='lazy'
                className='rounded-full'
                width={32}
                height={32}
                sizes='100vw'
                alt='Specialist illustration'
                src={specialist.avatar}
              />
              <div className='flex flex-col justify-between items-start'>
                <div className='text-black font-bold text-base'>{`${specialist.title} ${specialist.firstName} ${specialist.lastName}`}</div>
                <div className='text-gray-400 text-sm'>
                  {t(`disciplines.${specialist.mainDiscipline}.title`)}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
