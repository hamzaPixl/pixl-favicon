import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button from '../button'

export default function Recruit() {
  const { t } = useTranslate()

  return (
    <div className='text-white w-full bg-primary-900 py-8 px-10 flex flex-col xl:flex-row flew-wrap gap-4 items-center justify-between'>
      <div className='flex flex-col gap-3 flex-wrap items-start'>
        <div className='text-2xl sm:text-3xl font-bold leading-tight'>{t('recruit.title')}</div>
        <div className='text-base font-normal leading-normal'>{t('recruit.description')}</div>
      </div>
      <Button message={t('recruit.button')} type='submit' link={'/'} />
    </div>
  )
}
