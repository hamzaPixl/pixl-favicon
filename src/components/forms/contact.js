import React from 'react'
import { InvertedButton } from '../button'
import { useTranslate } from '../../hooks/useTranslate'

export default function ContactForm({ formSuccess, handleSubmit, formError }) {
  const { t } = useTranslate()
  return (
    <div className='text-primary-900 gap-4 flex flex-col justify-between items-left text-base font-normal w-full my-10 px-10'>
      <h1 className='text-2xl md:text-4xl font-bold'>{t('contact.form.title')}</h1>
      <div className='max-w-xl'>{t('contact.form.description')}</div>
      {formSuccess && (
        <div className='transition-all text-lg bg-green-500 rounded-xl text-white p-10'>
          {formSuccess.message}
        </div>
      )}
      {formError && (
        <div className='transition-all text-lg bg-red-500 rounded-xl text-white p-10'>
          {formError.message}
        </div>
      )}
      {
        <form method='POST' onSubmit={handleSubmit} name='contact' netlify='true'>
          <div className='flex flex-col lg:flex-row justify-between gap-4 w-full pb-10'>
            <div className='flew flex-col gap-4 flex-wrap lg:w-1/2'>
              <div className='flex flex-col gap-2 justify-start'>
                <input type='hidden' name='form-name' value='contact' />
                <label className='font-bold'>{t('contact.form.name')}</label>
                <input
                  type='text'
                  name='name'
                  className='border-2 focus:border-primary-900 focus:ring-primary-900 border-primary-900/50 rounded-xl'
                />
              </div>
              <div className='flex flex-col gap-2 justify-start'>
                <label className='font-bold'>{t('contact.form.email')}</label>
                <input
                  type='email'
                  name='email'
                  className='border-2 focus:border-primary-900 focus:ring-primary-900 border-primary-900/50 rounded-xl'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 justify-start lg:w-1/2'>
              <label className='font-bold'>{t('contact.form.message')}</label>
              <textarea
                name='message'
                className='border-2 focus:border-primary-900 focus:ring-primary-900 border-primary-900 rounded-xl h-full'
              ></textarea>
            </div>
          </div>
          <InvertedButton type='submit' message={t('contact.form.send')} />
        </form>
      }
    </div>
  )
}
