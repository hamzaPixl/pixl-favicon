import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button from '../button'

export default function NewsletterForm({ formSuccess, handleSubmit, formError }) {
  const { t } = useTranslate()
  return (
    <form method='POST' onSubmit={handleSubmit} name='newsletter' netlify='true' className=''>
      <div className='flex flex-col flex-wrap gap-2 md:flex-row justify-between'>
        <input type='hidden' name='form-name' value='newsletter' />
        <input
          type='email'
          name='email'
          placeholder={t('newsletter.email.placeholder')}
          className='md:w-2/3 border-2 bg-primary-900 text-white focus:border-white focus:ring-white border-white rounded-sm placeholder:text-white'
        />
        <Button message={t('newsletter.button')} type='submit' />
      </div>
      {formSuccess && <div className='text-green-500 transition-all'>{formSuccess.message}</div>}
      {formError && <div className='text-red-500 transition-all'>{formError.message}</div>}
    </form>
  )
}
