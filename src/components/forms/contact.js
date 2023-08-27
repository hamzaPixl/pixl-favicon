import React from 'react'
import { InvertedButton } from '../button'
import { useTranslate } from '../../hooks/useTranslate'

export default function ContactForm({ formSuccess, handleSubmit, formError }) {
  const { t } = useTranslate()
  return (
    <div className='text-black gap-4 flex flex-col justify-between items-left text-base font-normal w-full'>
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
          <div className='flex flex-col justify-between gap-4 w-full pb-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 w-full'>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-firstName' value='contact' />
                <label className='font-bold'>{t('contact.form.firstName')}</label>
                <input
                  type='text'
                  name='firstName'
                  className='border-2 focus:border-black focus:ring-black border-black ring-white rounded-xl'
                />
              </div>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-lastName' value='contact' />
                <label className='font-bold'>{t('contact.form.lastName')}</label>
                <input
                  type='text'
                  name='lastName'
                  className='border-2 focus:border-black focus:ring-black border-black ring-white rounded-xl'
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 w-full'>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-phone' value='contact' />
                <label className='font-bold'>{t('contact.form.phone')}</label>
                <input
                  type='text'
                  name='phone'
                  className='border-2 focus:border-black focus:ring-black border-black ring-white rounded-xl'
                />
              </div>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-email' value='contact' />
                <label className='font-bold'>{t('contact.form.email')}</label>
                <input
                  type='email'
                  name='email'
                  className='border-2 focus:border-black focus:ring-black border-black ring-white rounded-xl'
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 w-full'>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-center' value='contact' />
                <label className='font-bold'>{t('contact.form.center')}</label>
                <select
                  name='center'
                  className='border-2 focus:border-black focus:ring-black border-black ring-white rounded-xl'
                >
                  <option value='none'></option>
                  <option value='Auderghem'>Auderghem</option>
                  <option value='Location 2'>Location 2</option>
                  <option value='Location 3'>Location 3</option>
                </select>
              </div>
              <div className='flex flex-col gap-2 justify-start w-full'>
                <input type='hidden' name='form-question' value='contact' />
                <label className='font-bold'>{t('contact.form.question')}</label>
                <select
                  name='question'
                  className='border-2 focus:border-black focus:ring-black border-black ring-white rounded-xl'
                >
                  <option value='none'></option>
                  <option value='Medical question'>Medical question</option>
                  <option value='Appointment'>Appointment</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col gap-2 justify-start w-full'>
              <label className='font-bold'>{t('contact.form.message')}</label>
              <textarea
                name='message'
                className='border-2 focus:border-black focus:ring-black border-black ring-white rounded-xl'
              ></textarea>
            </div>
          </div>
          <InvertedButton type='submit' message={t('contact.form.send')} />
        </form>
      }
    </div>
  )
}
