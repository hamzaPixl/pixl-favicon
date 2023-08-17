import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollPosition } from '../hooks/useScrollPostition'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'
import Button from './button'

export function HeaderContent() {
  const { t } = useTranslate()
  const router = useRouter()
  return (
    <div className='w-full flex gap-2 flex-wrap items-center justify-between'>
      <Link href={'/'} className='w-[138px] h-[72px] sm:w-[216px] sm:h-[112px] relative'>
        <Image loading='lazy' fill src='/logo.svg' alt={`Logo`} />
      </Link>
      <div className='flex flex-row flex-wrap gap-2 md:gap-4 items-center'>
        {injected.pages.map((item, index) => (
          <Link
            key={index}
            className={`${
              router.route === item.link ? 'underline-offset-8 underline' : ''
            } text-white  hover:underline-offset-8 hover:underline cursor-pointer transition-all`}
            href={item.link}
          >
            {t(item.title)}
          </Link>
        ))}
        <Button message={t('header.appointment')} link='/appointment' />
      </div>
    </div>
  )
}

export default function Header() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()

  return (
    <nav
      className={classNames(
        scrollPosition > 0 ? 'sm:py-10 py-[20px]' : 'sm:py-20 py-[20px]',
        'bg-primary-900 text-white',
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out',
      )}
    >
      <div
        className={`max-w-screen-xl 2xl:max-w-screen-2xl px-6 md:px-16  mx-auto text-sm font-bold leading-normal`}
      >
        <HeaderContent />
      </div>
    </nav>
  )
}
