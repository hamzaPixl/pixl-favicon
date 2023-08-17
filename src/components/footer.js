import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import { HeaderContent } from './header'

export default function Footer() {
  const { t } = useTranslate()

  return (
    <footer className='bg-primary-900 text-white text-base'>
      <div
        className={`max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-16 flex flex-col gap-5 items-start justify-between mx-auto font-bold leading-normal mb-20`}
      >
        <HeaderContent />
        <div className='flex flex-col justify-start items-start gap-2 font-normal text-white'>
          <div className='font-bol'>{injected.companyName}</div>
          <div>{injected.address.address}</div>
          <div>{injected.tva}</div>
        </div>
        <div className='w-full flex flex-row gap-4 justify-between items-end'>
          <div className='flex gap-2 flex-row flex-wrap'>
            <div>Follow us on</div>
            {injected.socials.map((item, index) => (
              <Link key={index} className='text-white' href={item.link}>
                <Image
                  loading='lazy'
                  width={20}
                  height={20}
                  src={`/icons/${item.title}.svg`}
                  alt={`Social ${item.title} - ${item.link}`}
                />
              </Link>
            ))}
          </div>
          <div className='flex gap-2 flex-col flex-wrap font-bold'>
            <div>{t('footer.recruit.title')}</div>
            <div className='underline underline-offset-8 transition-all'>
              <Link href={'/'}>{t('footer.recruit.headline')}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary-accent-900'>
        <div className='max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-16 mx-auto font-bold leading-normal flex gap-4 justify-between items-center flex-wrap'>
          <div className='flex flex-row items-center gap-4 py-10'>
            {injected.sla.map((item, index) => (
              <Link
                key={index}
                className='font-normal hover:font-bold transition-all ease-in-out duration-300 hover:underline hover:underline-offset-8'
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className='uppercase text-gray-300'>
            Made with love by{' '}
            <Link className='text-white' href={injected.author.url}>
              {injected.author.name}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
