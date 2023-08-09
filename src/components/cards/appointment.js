import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button from '../button'

export default function Appointment() {
  const { t } = useTranslate()

  return (
    <div className='bg-background p-10 rounded-md'>
      <div className='text-globalText mb-5 flex flex-wrap justify-between items-center'>
        <div className='max-w-lg'>
          <div className='text-xl md:text-3xl font-bold pb-5'>{t('appointment.title')}</div>
          <div className='text-md md:text-base font-normal leading-normal'>
            {t('appointment.description')}
          </div>
        </div>
        <div>
          <Button message={t('appointment.button')} type='submit' link={'/'} />
        </div>
      </div>
    </div>
  )
}
