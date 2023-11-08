import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import { useLocale } from '../hooks/useLocale'
import Button from './button'

export default function Footer() {
  const { t } = useTranslate()
  const { switchLocale } = useLocale()

  return (
    <footer className='bg-primary-700 text-white text-sm'>
      <div className={`p-6 md:p-8 w-full max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-col md:flex-row gap-10 items-center justify-between'>
          <Link href={'/'} className='w-[182px] h-[56px] md:h-[70px] md:w-[228px] relative'>
            <Image loading='lazy' fill src='/logo.svg' alt={`Logo`} />
          </Link>
          <div className='flex flex-row gap-4 xl:gap-6 items-center'>
            <Button message={t('header.appointment')} link='/contact' />
          </div>
        </div>
      </div>
      <div className='p-6 md:p-8 w-full max-w-screen-xl mx-auto font-bold flex flex-col md:flex-row gap-10 md:gap-5 items-center md:items-end justify-between'>
        <div className='flex gap-2 flex-col items-center md:items-start lg:hidden'>
          {injected.pages.map((item, index) => (
            <Link
              key={index}
              className={`text-white  hover:underline-offset-8 hover:underline cursor-pointer transition-all`}
              href={item.link}
            >
              {t(item.title)}
            </Link>
          ))}
        </div>

        <div className='flex flex-col justify-between items-center md:items-start md:self-stretch gap-4 font-normal text-white'>
          <div className='flex gap-2 flex-col items-center md:items-start text-center'>
            <div className='font-bold'>{injected.companyName}</div>
            <div>{injected.address.address}</div>
            <div>{injected.tva}</div>
          </div>
          <div className='flex gap-2 flex-col md:flex-row items-center font-bold'>
            <div>Follow us on</div>
            <div className='flex gap-2 flex-col md:flex-row items-center'>
              <div className='flex gap-2 flex-row'>
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
            </div>
            <select
              onChange={(e) => {
                switchLocale(e.target.value)
              }}
              className={`md:ml-10 text-white bg-transparent border-none focus:ring-0 focus:outline-none p-0`}
            >
              {injected.locales.map((item, index) => (
                <option key={index} className={`uppercase text-white`} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 justify-between items-center md:items-start text-center'>
          <div className='flex gap-2 flex-col flex-wrap font-bold text-base'>
            <div>{t('footer.recruit.title')}</div>
            <div className='underline underline-offset-8 transition-all'>
              <Link href={'/contact'}>{t('footer.recruit.headline')}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary-900 w-full'>
        <div className='p-6 md:p-8 mx-auto font-bold leading-normal max-w-screen-xl flex flex-col md:flex-row gap-4 justify-between items-center text-xs'>
          <div className='flex flex-row items-center gap-2'>
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
          <div className='uppercase text-white/50 flex items-center gap-2'>
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
