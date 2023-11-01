import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { InfoBoxList } from '../components/cards/infoBox'
import Button from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import { allSpecialists } from '../api/specialists'
import { SpecialistListCard } from '../components/cards/specialist'
import { useRouter } from 'next/router'
import SearchForm from '../components/forms/search'
import Newsletter from '../components/cards/newsletter'

export default function Specialists() {
  const router = useRouter()
  const { t } = useTranslate()
  const [specialists, setSpecialists] = useState(allSpecialists)
  const [, setQuery] = useState(router.query.filter || '')

  useEffect(() => {
    if (router.query.filter?.length >= 3) {
      filterSpecialists(router.query.filter)
    }
  }, [router.query])

  const filterSpecialists = (value) => {
    router.push(`/specialists?filter=${value}`, null, { shallow: true })
    if (value.length >= 3) {
      const filteredSpecialists = allSpecialists.filter((specialist) => {
        return specialist.title.toLowerCase().includes(value.toLowerCase())
      })
      setSpecialists(filteredSpecialists)
    }

    if (value.length === 0) {
      setSpecialists(allSpecialists)
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    setQuery(value)
    filterSpecialists(value)
  }
  return (
    <Layout>
      <Container>
        <div className='flex flex-col items-start gap-4 w-full'>
          <div className='text-2xl lg:text-4xl font-bold'>{t('specialists.title')}</div>
          <div className='max-w-xl text-base'>{t('specialists.description')}</div>
        </div>
        <div className='w-full flex flex-col items-start justify-between gap-4'>
          <SearchForm handleChange={handleChange} />

          <div className='flex gap-10 flex-col-reverse md:flex-row justify-between'>
            <div className='w-full lg:w-2/3 h-min grid grid-flow-dense grid-cols-1 gap-4'>
              {specialists.map((specialist, i) => (
                <SpecialistListCard specialist={specialist} key={`${specialist.firstName}-${i}`} />
              ))}
            </div>
            <div className='w-full lg:w-1/3'>
              <InfoBoxList
                title={t('appointment.title')}
                description={t('appointment.description')}
              >
                <Button message={t('appointment.button')} link={'/contact'} className={'w-full'} />
              </InfoBoxList>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <Newsletter />
      </Container>
    </Layout>
  )
}
