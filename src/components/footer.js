import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'

export default function Footer() {
  const { t } = useTranslate()
  const router = useRouter()

  return (
    <footer className='bg-white'>
      <div className='max-w-screen-xl 2xl:max-w-screen-2xl flex gap-4 flex-col md:flex-row flex-wrap items-center justify-between mx-auto py-2 px-5 md:py-8 md:px-16 text-gray-900 text-xs md:text-base leading-normal font-bold'>
        <div className='flex gap-2 flex-col md:flex-row items-center'>
          <div className='sm:hidden flex flex-row flex-wrap gap-2 items-center mb-5'>
            {injected.pages.map((item, index) => (
              <Link
                key={index}
                className={`${
                  router.route === item.link
                    ? 'text-primary-900 underline-offset-8 underline'
                    : 'text-gray-400'
                } hover:text-primary-900 hover:underline-offset-8 hover:underline cursor-pointer transition-all`}
                href={item.link}
              >
                {t(item.title)}
              </Link>
            ))}
          </div>
          <div className='flex gap-2 flex-row flex-wrap'>
            {injected.socials.map((item, index) => (
              <Link key={index} className='text-primary-900' href={item.link}>
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
          <div className='font-bold'>
            <div>{t('footer.recruit.title')}</div>
            <div className='underline underline-offset-8 transition-all'>
              <Link href={'/'}>{t('footer.recruit.headline')}</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='py-10 bg-accentBackground text-globalText text-xs md:text-md font-bold leading-normal'>
        <div className='mx-auto md:max-w-screen-2xl flex flex-wrap items-center justify-between '>
          <div className='flex flex-row items-center'>
            {injected.sla.map((item, index) => (
              <Link
                key={index}
                className='text-primary-900 font-normal hover:font-bold  transition-all ease-in-out duration-300 hover:underline hover:underline-offset-8'
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className='uppercase text-gray-400'>
          Made with love by{' '}
          <Link className='text-primary-900' href={injected.author.url}>
            {injected.author.name}
          </Link>
        </div>
      </div>
    </footer>
  )
}
