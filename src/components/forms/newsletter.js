import React from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import Button from '../button'
import { useRouter } from 'next/router'

export default function NewsletterForm({ formSuccess, handleSubmit, formError }) {
  const router = useRouter()
  const { t } = useTranslate()
  return (
    <form
      method='POST'
      onSubmit={handleSubmit}
      netlify-honeypot='bot-field'
      action={router.pathname}
      name='newsletter'
    >
      <div className='flex flex-col flex-wrap gap-2 md:flex-row justify-between'>
        <input type='hidden' name='form-name' value='newsletter' />
        <p className='hidden'>
          <label>
            Don’t fill this out if you’re human: <input name='bot-field' />
          </label>
        </p>
        <input
          type='email'
          name='email'
          placeholder={t('newsletter.email.placeholder')}
          className='md:w-2/3 rounded-xl border-2 bg-primary-500 text-white focus:border-white focus:ring-white border-white placeholder:text-white'
        />
        <Button message={t('newsletter.button')} type='submit' />
      </div>
      {formSuccess && <div className='text-green-500 transition-all'>{formSuccess.message}</div>}
      {formError && <div className='text-red-500 transition-all'>{formError.message}</div>}
    </form>
  )
}
