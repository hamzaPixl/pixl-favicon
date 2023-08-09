import React, { useState } from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import NewsletterForm from '../forms/newsletter'

export default function Newsletter() {
  const { t } = useTranslate()
  const [formSuccess, setFormSuccess] = useState()
  const [formError, setFormError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormSuccess({ message: t('newsletter.form.success') })
        console.log(t('newsletter.form.success'))
      })
      .catch(() => {
        setFormError({ message: t('newsletter.form.error') })
        console.log(t('newsletter.form.error'))
      })
  }
  return (
    <div className='text-white w-full bg-primary-900 py-8 px-10 flex flex-col xl:flex-row flew-wrap gap-4 items-center justify-between'>
      <div className='flex flex-col gap-3 flex-wrap items-start'>
        <div className='text-2xl sm:text-3xl font-bold leading-tight'>{t('newsletter.title')}</div>
        <div className='text-base font-normal leading-normal'>{t('newsletter.description')}</div>
      </div>
      <div className='w-full'>
        <NewsletterForm
          formSuccess={formSuccess}
          handleSubmit={handleSubmit}
          formError={formError}
        />
      </div>
    </div>
  )
}
