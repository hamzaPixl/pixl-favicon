import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollPosition } from '../hooks/useScrollPostition'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'
import Button from './button'
import { useLocale } from '../hooks/useLocale'

export default function Header() {
  const { t } = useTranslate()
  const router = useRouter()

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()
  const { switchLocale, locale } = useLocale()
  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? 'sm:py-10 py-[20px]' : 'sm:py-20 py-[20px]',
        'bg-white text-primary-900',
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out',
      )}
    >
      <div
        className={`max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-16 flex gap-2 flex-wrap items-center justify-between mx-auto text-sm font-bold leading-normal`}
      >
        <Link href={'/'} className='w-[138px] h-[72px] sm:w-[216px] sm:h-[112px] relative'>
          <Image loading='lazy' fill src='/logo.svg' alt={`Logo`} />
        </Link>
        <div className='hidden sm:flex sm:flex-row sm:flex-wrap sm:gap-4'>
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
        <div className='sm:hidden'>
          <select
            onChange={(e) => {
              switchLocale(e.target.value)
            }}
            className={`[&:not(size)]:bg-none [&:not(size)]:border-none [&:not(size)]:p-0 text-primary-900`}
          >
            {injected.locales.map((item, index) => (
              <option key={index} className={`uppercase text-primary-900`} value={item}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className='hidden sm:flex sm:flex-row sm:flex-wrap sm:gap-2'>
          {injected.locales.map((item, index) => (
            <a
              key={index}
              className={`${
                locale === item ? 'text-primary-900' : 'text-gray-400'
              } hover:text-primary-900 cursor-pointer transition-all uppercase`}
              href='#'
              onClick={(e) => {
                switchLocale(e.target.text)
              }}
            >
              {item}
            </a>
          ))}
        </div>
        <div className=''>
          <Button message={t('header.appointment')} link='/appointment' />
        </div>
      </div>
    </nav>
  )
}
