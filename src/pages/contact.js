import React, { useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/cards/newsletter'
import ContactForm from '../components/forms/contact'
import { useTranslate } from '../hooks/useTranslate'
import Container from '../components/container'
import Faq from '../components/faq'
import ContactCard from '../components/cards/contact'
import { centers } from '../api/centers'
import CenterCard from '../components/cards/center'

export default function Contact() {
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
        setFormSuccess({ message: t('contact.form.success') })
        console.log(t('contact.form.success'))
      })
      .catch(() => {
        setFormError({ message: t('contact.form.error') })
        console.log(t('contact.form.error'))
      })
  }

  return (
    <Layout>
      <div className='bg-gray-100'>
        <Container>
          <ContactCard />
          <div className='text-black w-full flex flex-col gap-10 justify-between items-start'>
            <div className='flex flex-col gap-4'>
              <div className='text-3xl xl:text-4xl font-bold'>{t('centers')}</div>
            </div>
            <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-2 gap-4 w-full'>
              {centers.map((center, index) => (
                <CenterCard
                  key={`center-${index}`}
                  image={center.image}
                  title={center.title}
                  location={center.location}
                  locationLink={center.locationLink}
                  time={center.time}
                />
              ))}
            </div>
          </div>
          <ContactForm
            handleSubmit={handleSubmit}
            formSuccess={formSuccess}
            formError={formError}
          />
          <Faq />
          <Newsletter />
        </Container>
      </div>
    </Layout>
  )
}
