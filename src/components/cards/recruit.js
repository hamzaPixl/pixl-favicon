import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button from '../button'

export default function Recruit() {
  const { t } = useTranslate()

  return (
    <div className='bg-background p-10 rounded-md'>
      <div className='text-globalText mb-5 flex flex-wrap justify-between items-center'>
        <div className='max-w-lg'>
          <div className='text-xl md:text-3xl font-bold pb-5'>{t('recruit.title')}</div>
          <div className='text-md md:text-base font-normal leading-normal'>
            {t('recruit.description')}
          </div>
        </div>
        <div>
          <Button message={t('recruit.button')} type='submit' link={'/'} />
        </div>
      </div>
    </div>
  )
}
