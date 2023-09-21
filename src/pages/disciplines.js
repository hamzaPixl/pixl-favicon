import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Container from '../components/container'
import { allDisciplines } from '../api/disciplines'
import DisciplineCard, { DisciplineListCard } from '../components/cards/discipline'
import { useTranslate } from '../hooks/useTranslate'
import { InfoBoxList } from '../components/cards/infoBox'
import Button from '../components/button'
import { useRouter } from 'next/router'
import SearchForm from '../components/forms/search'
import Newsletter from '../components/cards/newsletter'

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
          <div className='text-2xl lg:text-4xl font-bold'>{t('disciplines.title')}</div>
          <div className='max-w-xl text-base'>{t('disciplines.description')}</div>
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
          <SearchForm handleChange={handleChange} />
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
