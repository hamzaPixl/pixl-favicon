import React, { useState } from 'react'
import { useTranslate } from '../../hooks/useTranslate'
import NewsletterForm from '../forms/newsletter'
import InfoBox from './infoBox'

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
    <InfoBox title={t('newsletter.title')} description={t('newsletter.description')}>
      <div className='w-full'>
        <NewsletterForm
          formSuccess={formSuccess}
          handleSubmit={handleSubmit}
          formError={formError}
        />
      </div>
    </InfoBox>
  )
}
