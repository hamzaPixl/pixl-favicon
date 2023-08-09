import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button, { InvertedButton } from '../button'
import Image from 'next/image'

export default function About({ defaultImage = '/images/home-hero.png' }) {
  const { t } = useTranslate()

  return (
    <section className='flex justify-between w-full items-center'>
      <div className='max-w-screen-2xl px-5 py-10'>
        <div className='flew flex-col max-w-2xl text-global items-center'>
          <h1 className='mb-4 text-4xl font-bold'>{t('about.card.title')}</h1>
          <p className='mb-6 font-light text-normal'>{t('about.card.description')} </p>
          <div className='flex flex-wrap justify-start items-center'>
            <Button message={t('about.card.button')} type='submit' link={'/'} />
            <InvertedButton message={t('about.card.button')} type='submit' link={'/'} />
          </div>
        </div>
      </div>
      <div className='w-1/2 relative h-[15rem] md:h-[25rem]'>
        <Image
          sizes='100vw'
          loading='lazy'
          fill
          alt='Mission illustration'
          src={defaultImage}
          className='rounded-md'
        />
      </div>
    </section>
  )
}
