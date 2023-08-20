import React from 'react'
import injected from '../injected.json'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'
import { useRouter } from 'next/router'
import Button from './button'
import Burger from './burger'

export default function Header({ setNavbarOpen, navbarOpen }) {
  const { t } = useTranslate()
  const router = useRouter()
  return (
    <nav
      className={
        'z-50 sticky top-0 mx-auto overflow-auto transition-all duration-300 ease-in-out bg-primary-700 text-white text-base p-6 md:p-8'
      }
    >
      <div className={`max-w-screen-xl mx-auto`}>
        <div className='font-bold leading-normal w-full flex flex-row gap-2 items-center justify-between'>
          <Link href={'/'} className='w-[182px] h-[56px] md:h-[70px] md:w-[228px] relative'>
            <Image loading='lazy' fill src='/logo.svg' alt={`Logo`} />
          </Link>
          <div className='hidden lg:flex flex-row gap-4 xl:gap-6 items-center'>
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
            <div className='hidden xl:block'>
              <Button message={t('header.appointment')} link='/appointment' />
            </div>
          </div>
          <div className='block lg:hidden'>
            <Link
              href={'/'}
              className='relative'
              onClick={(e) => {
                e.preventDefault()
                setNavbarOpen(!navbarOpen)
              }}
            >
              <Burger navbarOpen={navbarOpen} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
