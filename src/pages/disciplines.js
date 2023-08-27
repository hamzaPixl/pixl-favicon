import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { allDisciplines } from '../api/disciplines'
import DisciplineCard, { DisciplineListCard } from '../components/cards/discipline'
import { useTranslate } from '../hooks/useTranslate'
import InfoBox, { InfoBoxList } from '../components/cards/infoBox'
import Button from '../components/button'
import { useRouter } from 'next/router'

export default function Disciplines() {
  const router = useRouter()
  const { t } = useTranslate()
  const [disciplines, setDisciplines] = useState(allDisciplines)
  const [, setQuery] = useState(router.query.filter || '')

  useEffect(() => {
    if (router.query.filter?.length >= 3) {
      filterDisciplines(router.query.filter)
    }
  }, [router.query])

  const filterDisciplines = (value) => {
    router.push(`/disciplines?filter=${value}`, null, { shallow: true })
    if (value.length >= 3) {
      const filteredDisciplines = allDisciplines.filter((discipline) => {
        return t(discipline.title).toLowerCase().includes(value.toLowerCase())
      })
      setDisciplines(filteredDisciplines)
    }

    if (value.length === 0) {
      setDisciplines(allDisciplines)
    }
  }

  const handleChange = (e) => {
    const { value } = e.target
    setQuery(value)
    filterDisciplines(value)
  }

  return (
    <Layout>
      <Container>
        <div className='flex flex-col items-start gap-4 w-full'>
          <div className='text-2xl lg:text-4xl font-bold'>Nos Disciplines</div>
          <div className='max-w-xl text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </div>
        </div>
        <div className='w-full lg:grid grid-flow-dense grid-cols-4 gap-4 hidden'>
          {allDisciplines.slice(0, 4).map((discipline, i) => (
            <DisciplineCard
              key={`${discipline.name}-${i}`}
              title={t(discipline.title)}
              link={discipline.link}
              image={discipline.defaultIcon}
            />
          ))}
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
              {disciplines.map((discipline, i) => (
                <DisciplineListCard
                  key={`${discipline.name}-${i}`}
                  title={t(discipline.title)}
                  link={discipline.link}
                  image={discipline.defaultIcon}
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
