import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button, { InvertedButton } from '../button'

export default function Hero({ defaultImage = '/images/home-hero.png' }) {
  const { t } = useTranslate()

  return (
    <section
      style={{ '--image-url': `url(${defaultImage})` }}
      className='flex justify-start items-start bg-no-repeat bg-cover bg-center rounded-md bg-[image:var(--image-url)] w-full'
    >
      <div className='max-w-screen-2xl px-5 py-10'>
        <div className='flew flex-col justify-start max-w-2xl text-globalText'>
          <h1 className='mb-4 text-4xl font-bold'>Payments tool for software companies</h1>
          <p className='mb-6 font-light text-normal'>
            From checkout to global sales tax compliance, companies around the world use Flowbite to
            simplify their payment stack.
          </p>
          <div className='flex flex-wrap justify-start items-center'>
            <Button message={t('hero.button')} type='submit' link={'/'} />
            <InvertedButton message={t('hero.button')} type='submit' link={'/'} />
          </div>
        </div>
      </div>
    </section>
  )
}
