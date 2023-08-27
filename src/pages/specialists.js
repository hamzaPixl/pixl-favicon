import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import InfoBox, { InfoBoxList } from '../components/cards/infoBox'
import Button from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import { allSpecialists } from '../api/specialists'
import { SpecialistListCard } from '../components/cards/specialist'
import { useRouter } from 'next/router'

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
          <div className='text-2xl lg:text-4xl font-bold'>Nos specialists</div>
          <div className='max-w-xl text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </div>
        </div>
        <div className='w-full flex flex-col items-start justify-between gap-4'>
          <form className='w-full'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-400 rounded-xl bg-gray-50 focus:ring-primary-700 focus:border-primary-700 '
                placeholder='Search ...'
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <div className='flex gap-10 flex-col-reverse md:flex-row justify-between'>
            <div className='w-full lg:w-2/3 h-min grid grid-flow-dense grid-cols-1 gap-4'>
              {specialists.map((specialist, i) => (
                <SpecialistListCard
                  key={`${specialist.firstName}-${i}`}
                  title={specialist.title}
                  link={specialist.link}
                  image={specialist.avatar}
                  mainDiscipline={t(specialist.mainDiscipline)}
                />
              ))}
            </div>
            <div className='w-full lg:w-1/3'>
              <InfoBoxList
                title={t('appointment.title')}
                description={t('appointment.description')}
              >
                <Button
                  message={t('appointment.button')}
                  link={'/appointment'}
                  className={'w-full'}
                />
              </InfoBoxList>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <Button message={t('appointment.button')} link={'/appointment'} />
        </InfoBox>
      </Container>
    </Layout>
  )
}
