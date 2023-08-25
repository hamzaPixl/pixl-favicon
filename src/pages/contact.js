import React, { useState } from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/cards/newsletter'
import ContactForm from '../components/forms/contact'
import { useTranslate } from '../hooks/useTranslate'
import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link'

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
          <div className='flex justify-between items-start md:items-center md:flex-row flex-col gap-2 bg-primary-700 rounded-xl text-white font-bold p-6 w-full'>
            <div className='text-xl xl:text-2xl'>Contact us</div>
            <div className='text-base flex flex-col md:flex-row gap-2'>
              <div className='flex flex-row gap-2'>
                <Image
                  loading='lazy'
                  width={20}
                  height={20}
                  alt='Contact phone illustration'
                  src={'/icons/phone.svg'}
                />
                <Link href='tel:+31 20 123 4567'>+31 20 123 4567</Link>
              </div>
              <div className='flex flex-row gap-2'>
                <Image
                  loading='lazy'
                  width={20}
                  height={20}
                  alt='Contact mail illustration'
                  src={'/icons/mail.svg'}
                />
                <Link href='mailto:example@gmail.Com'>example@gmail.Com</Link>
              </div>
            </div>
          </div>
          <div className='text-black w-full flex flex-col gap-10 justify-between items-start'>
            <div className='flex flex-col gap-4'>
              <div className='text-3xl xl:text-4xl font-bold'>Our centers</div>
            </div>
            <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4 w-full'>
              <div className='flex flex-col md:flex-row items-center'>
                <div className='h-[200px] md:h-full w-full md:w-[200px] relative'>
                  <Image
                    loading='lazy'
                    fill
                    alt='Map center illustration'
                    src={'/images/map.png'}
                  />
                </div>
                <div className='flex flex-col items-start gap-2 bg-white text-black p-5'>
                  <div className='text-primary-700 text-xl font-bold'>Medistia auderghem</div>
                  <div className='flex flex-row gap-2 text-sm items-center'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Center location illustration'
                      src={'/icons/location.svg'}
                    />
                    <Link href='https://goo.gl/maps/r55w7b27k21AiNU79'>
                      Chaussée de Wavre 1341, 1160 Auderghem
                    </Link>
                  </div>
                  <div className='flex flex-row gap-2 text-sm items-center'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Center time illustration'
                      src={'/icons/time.svg'}
                    />
                    Monday to Friday from 8:00 to 17:00
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center'>
                <div className='h-[200px] md:h-full w-full md:w-[200px] relative'>
                  <Image
                    loading='lazy'
                    fill
                    alt='Map center illustration'
                    src={'/images/map.png'}
                  />
                </div>
                <div className='flex flex-col items-start gap-2 bg-white text-black p-5'>
                  <div className='text-primary-700 text-xl font-bold'>Medistia auderghem</div>
                  <div className='flex flex-row gap-2 text-sm items-center'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Center location illustration'
                      src={'/icons/location.svg'}
                    />
                    <Link href='https://goo.gl/maps/r55w7b27k21AiNU79'>
                      Chaussée de Wavre 1341, 1160 Auderghem
                    </Link>
                  </div>
                  <div className='flex flex-row gap-2 text-sm items-center'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Center time illustration'
                      src={'/icons/time.svg'}
                    />
                    Monday to Friday from 8:00 to 17:00
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center'>
                <div className='h-[200px] md:h-full w-full md:w-[200px] relative'>
                  <Image
                    loading='lazy'
                    fill
                    alt='Map center illustration'
                    src={'/images/map.png'}
                  />
                </div>
                <div className='flex flex-col items-start gap-2 bg-white text-black p-5'>
                  <div className='text-primary-700 text-xl font-bold'>Medistia auderghem</div>
                  <div className='flex flex-row gap-2 text-sm items-center'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Center location illustration'
                      src={'/icons/location.svg'}
                    />
                    <Link href='https://goo.gl/maps/r55w7b27k21AiNU79'>
                      Chaussée de Wavre 1341, 1160 Auderghem
                    </Link>
                  </div>
                  <div className='flex flex-row gap-2 text-sm items-center'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Center time illustration'
                      src={'/icons/time.svg'}
                    />
                    Monday to Friday from 8:00 to 17:00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm
            handleSubmit={handleSubmit}
            formSuccess={formSuccess}
            formError={formError}
          />
          <Newsletter />
        </Container>
      </div>
    </Layout>
  )
}
