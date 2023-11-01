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
import { centers } from '../../api/centers'
import { DisciplineListSpecialistDetail } from '../../components/cards/discipline'
import injected from '../../injected.json'
import { allDisciplines } from '../../api/disciplines'

const week = ['mon', 'tue', 'wed', 'thu', 'fri']

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
                    link={`tel:${specialist.contact.phone || injected.tel}`}
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
                    {specialist.contact.phone && (
                      <Link href={`tel:${specialist.contact.phone}`}>
                        {specialist.contact.phone}
                      </Link>
                    )}
                  </div>
                  <div className='flex flex-row gap-2'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Contact mail illustration'
                      src={'/icons/mail-primary.svg'}
                    />
                    {specialist.contact.email && (
                      <Link href={`mailto:${specialist.contact.email}`}>
                        {specialist.contact.email}
                      </Link>
                    )}
                  </div>
                  <div className='flex flex-row gap-2'>
                    <Image
                      loading='lazy'
                      width={20}
                      height={20}
                      alt='Contact web illustration'
                      src={'/icons/web.svg'}
                    />
                    {specialist.contact.web && (
                      <Link arget='_blank' href={`https://${specialist.contact.web}`}>
                        {specialist.contact.web}
                      </Link>
                    )}
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-base font-bold'>{t('specialist.discipline.title')}</div>
                  <div className='text-base'>
                    <ul>
                      {specialist.disciplines.map((d, index) => (
                        <li key={`di-${index}`} className='py-2'>
                          <DisciplineListSpecialistDetail
                            discipline={allDisciplines.find((f) => f.id === d)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-2/3 flex flex-col gap-5 justify-between items-start'>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-3xl xl:text-4xl font-bold'>{`${specialist.title} ${specialist.firstName} ${specialist.lastName}`}</div>
                  <div className='text-base text-primary-700 font-bold'>
                    {t(`disciplines.${specialist.mainDiscipline}.title`)}
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-base text-black'>
                    {t(specialist.description)
                      .split('\n\n')
                      .map((paragraph, index) => (
                        <p key={`desc-${index}`} className='py-2'>
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-xl font-bold text-primary-700'>{t('interests.title')}</div>
                  <div className='text-base'>
                    <ul className='list-disc'>
                      {specialist.interests.map((interest, index) => (
                        <li key={`in-${index}`} className='py-2'>
                          {t(interest)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-xl font-bold text-primary-700'>{t('patients.title')}</div>
                  <div className='text-base'>
                    <ul className='list-disc'>
                      {specialist.patients.map((patient, index) => (
                        <li key={`pa-${index}`} className='py-2'>
                          {t(patient)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col gap-1 justify-between items-start'>
                  <div className='text-xl font-bold text-primary-700'>{t('languages.title')}</div>
                  <div className='text-base'>
                    <ul className='list-disc'>
                      {specialist.languages.map((lang, index) => (
                        <li key={`lng-${index}`} className='py-2'>
                          {t(lang)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-black w-full md:hidden block'>
              <div className='flex flex-col gap-2 items-center justify-between'>
                <div className='flex flex-col md:flex-row gap-1 justify-between items-start md:items-center w-full pb-10'>
                  <div className='text-2xl sm:text-3xl font-bold leading-tight'>
                    {t('specialist.timetable.title')}
                  </div>
                </div>
                {specialist.locations.map((location, index) => (
                  <div
                    className='flex flex-col gap-2 items-start pb-10 w-full'
                    key={`loc-location.id-spe-${index}`}
                  >
                    <div className='text-white bg-primary-700 pl-5 font-bold text-base py-2 px-10 w-full'>
                      {centers.find((c) => c.id === location)?.title}
                    </div>
                    <div className='grid grid-flow-dense grid-cols-5 gap-2 w-full'>
                      {week.map((d, index) => (
                        <div
                          key={`day-${index}`}
                          className='bg-gray-100 text-black uppercase text-center text-sm py-2 font-bold'
                        >
                          {t(`week.${d}`)}
                        </div>
                      ))}
                    </div>
                    <div className='grid grid-flow-dense grid-cols-5 gap-2 w-full'>
                      {specialist.timetable.map((day, index) => (
                        <div key={`loc-${index}-${location.id}`} className='flex flex-row gap-1'>
                          <div
                            className={
                              day.locations.find(
                                (f) => f.location === centers.find((c) => c.id === location).id,
                              )?.am
                                ? 'bg-primary-700/20 mx-auto justify-center flex w-1/2'
                                : 'bg-gray-100 mx-auto flex w-1/2'
                            }
                          >
                            {day.locations.find(
                              (f) => f.location === centers.find((c) => c.id === location).id,
                            )?.am && (
                              <Image
                                loading='lazy'
                                width={24}
                                height={24}
                                src={`/icons/green-flag.svg`}
                                alt={`green-flag`}
                              />
                            )}
                          </div>
                          <div
                            className={
                              day.locations.find(
                                (f) => f.location === centers.find((c) => c.id === location).id,
                              )?.pm
                                ? 'bg-primary-700/20 py-2 mx-auto justify-center flex w-1/2'
                                : 'bg-gray-100 mx-auto items-center flex w-1/2'
                            }
                          >
                            {day.locations.find(
                              (f) => f.location === centers.find((c) => c.id === location).id,
                            )?.pm && (
                              <Image
                                loading='lazy'
                                width={24}
                                height={24}
                                src={`/icons/green-flag.svg`}
                                alt={`green-flag`}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='text-black w-full hidden md:block'>
              <div className='flex flex-col gap-4 items-center justify-between'>
                <div className='flex flex-col md:flex-row gap-3 justify-between items-start md:items-center w-full pb-10'>
                  <div className='text-2xl sm:text-3xl font-bold leading-tight'>
                    {t('specialist.timetable.title')}
                  </div>
                </div>
                <div className='grid grid-flow-dense grid-cols-7 gap-4 w-full'>
                  <div className='text-white bg-primary-700 pl-5 font-bold text-base py-2 px-10 col-span-2'>
                    {t('locations.title')}
                  </div>
                  {week.map((d, index) => (
                    <div
                      key={`day-${index}`}
                      className='bg-gray-100 text-black uppercase text-center text-sm py-2 px-10 font-bold'
                    >
                      {t(`week.${d}`)}
                    </div>
                  ))}
                </div>
                {specialist.locations.map((location, index) => (
                  <div className='grid grid-flow-dense grid-cols-7 gap-4 w-full' key={index}>
                    <div className='text-white bg-primary-700 pl-5 font-bold text-base py-2 px-10 col-span-2'>
                      {centers.find((c) => c.id === location)?.title}
                    </div>
                    {specialist.timetable.map((day, index) => (
                      <div key={`loc-${index}-${location.id}`} className='flex flex-row gap-1'>
                        <div
                          className={
                            day.locations.find(
                              (f) => f.location === centers.find((c) => c.id === location).id,
                            )?.am
                              ? 'bg-primary-700/20 mx-auto justify-center flex w-1/2'
                              : 'bg-gray-100 py-2 px-10 flex w-1/2'
                          }
                        >
                          {day.locations.find(
                            (f) => f.location === centers.find((c) => c.id === location).id,
                          )?.am && (
                            <Image
                              loading='lazy'
                              width={24}
                              height={24}
                              src={`/icons/green-flag.svg`}
                              alt={`green-flag`}
                            />
                          )}
                        </div>
                        <div
                          className={
                            day.locations.find(
                              (f) => f.location === centers.find((c) => c.id === location).id,
                            )?.pm
                              ? 'bg-primary-700/20 py-2 mx-auto justify-center flex w-1/2'
                              : 'bg-gray-100 py-2 px-10 items-center flex w-1/2'
                          }
                        >
                          {day.locations.find(
                            (f) => f.location === centers.find((c) => c.id === location).id,
                          )?.pm && (
                            <Image
                              loading='lazy'
                              width={24}
                              height={24}
                              src={`/icons/green-flag.svg`}
                              alt={`green-flag`}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <Button message={t('appointment.button')} link={'/contact'} />
        </InfoBox>
      </Container>
    </Layout>
  )
}
