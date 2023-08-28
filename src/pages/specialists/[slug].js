import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import { allSpecialists } from '../../api/specialists'
import Container from '../../components/container'
import Button, { InvertedButton } from '../../components/button'
import InfoBox from '../../components/cards/infoBox'
import Image from 'next/image'
import Link from 'next/link'

export default function SpecialistDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [specialist, setSpecialist] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setSpecialist(allSpecialists.find((item) => item.link.includes(router.query.slug)))
    }
  }, [router.query])

  return (
    <Layout>
      <Container>
        {specialist && (
          <>
            <div className='text-black w-full flex flex-col md:flex-row gap-4 justify-between items-start'>
              <div className='w-full md:w-1/2 flex flex-col gap-5 justify-between items-start'>
                <div className='flex flex-col gap-2 items-start justify-between'>
                  <Image
                    loading='lazy'
                    className='rounded-xl'
                    width={300}
                    height={300}
                    alt='Specialist illustration avatar'
                    src={specialist.avatar}
                  />
                  <InvertedButton
                    message={t('appointment.button')}
                    link={'/'}
                    className={'w-full'}
                  />
                </div>
                <div className='text-base font-bold'>{t('contact')}</div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='flex flex-row gap-2'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Contact phone illustration'
                      src={'/icons/phone-primary.svg'}
                    />
                    <Link href={`tel:${specialist.contact.phone}`}>{specialist.contact.phone}</Link>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Contact mail illustration'
                      src={'/icons/mail-primary.svg'}
                    />
                    <Link href={`mailto:${specialist.contact.email}`}>
                      {specialist.contact.email}
                    </Link>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Contact web illustration'
                      src={'/icons/web.svg'}
                    />
                    <Link href={`${specialist.contact.web}`}>{specialist.contact.web}</Link>
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-base font-bold'>{t('disciplines.title')}</div>
                  <div className='text-base'>
                    <ul className=''>
                      {specialist.disciplines.map((d, index) => (
                        <li key={`li-${index}`} className='py-2'>
                          {t(d)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-2/3 flex flex-col gap-5 justify-between items-start'>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-3xl xl:text-4xl font-bold'>{specialist.title}</div>
                  <div className='text-base text-primary-700 font-bold'>
                    {t(specialist.mainDiscipline)}
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-base text-black'>
                    {t(specialist.description)
                      .split('\n\n')
                      .map((paragraph, index) => (
                        <p key={`p-${index}`} className='py-2'>
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-xl font-bold text-primary-700'>{t('interests.title')}</div>
                  <div className='text-base'>
                    <ul className=''>
                      {specialist.interests.map((interest, index) => (
                        <li key={`li-${index}`} className='py-2'>
                          {t(interest)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-xl font-bold text-primary-700'>{t('patients.title')}</div>
                  <div className='text-base'>
                    <ul className=''>
                      {specialist.patients.map((patient, index) => (
                        <li key={`li-${index}`} className='py-2'>
                          {t(patient)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-xl font-bold text-primary-700'>{t('languages.title')}</div>
                  <div className='text-base'>
                    <ul className=''>
                      {specialist.languages.map((lang, index) => (
                        <li key={`li-${index}`} className='py-2'>
                          {t(lang)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <Button message={t('appointment.button')} link={'/'} />
        </InfoBox>
      </Container>
    </Layout>
  )
}
