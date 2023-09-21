import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'
import { allDisciplines } from '../../api/disciplines'
import Container from '../../components/container'
import Newsletter from '../../components/cards/newsletter'
import Button, { InvertedButton } from '../../components/button'
import ArticleCard from '../../components/cards/article'
import { allArticles } from '../../api/articles'
import Faq from '../../components/faq'
import InfoBox from '../../components/cards/infoBox'
import Image from 'next/image'
import { allSpecialists } from '../../api/specialists'
import { centers } from '../../api/centers'
import Link from 'next/link'
import { SpecialistListCardDisciplineDetail } from '../../components/cards/specialist'

const week = ['mon', 'tue', 'wed', 'thu', 'fri']

export default function DisciplineDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [discipline, setDiscipline] = useState()

  const [specialists, setSpecialists] = useState(allSpecialists)
  const [location, setLocation] = useState(centers[0].id)

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      const disc = allDisciplines.find((item) => item.name === router.query.slug)
      setDiscipline(disc)
      let specialists = []
      if (router.query.location?.length > 0) {
        setLocation(router.query.location)
        specialists = allSpecialists.filter(
          (s) => s.disciplines.includes(disc.id) && s.locations.includes(router.query.location),
        )
      } else {
        setLocation(centers[0].id)
        specialists = allSpecialists.filter(
          (s) => s.disciplines.includes(disc.id) && s.locations.includes(centers[0].id),
        )
      }
      setSpecialists(specialists)
    }
  }, [router.query])

  return (
    <Layout>
      <Container>
        {discipline && (
          <>
            <div className='text-black w-full flex flex-col lg:flex-row gap-10 justify-between items-start'>
              <div className='flex flex-col gap-4 w-full lg:w-2/3 items-start'>
                <Image
                  loading='lazy'
                  className='rounded-xl'
                  width={32}
                  height={32}
                  alt='Article illustration'
                  src={discipline.defaultIcon}
                />
                <div className='text-3xl xl:text-4xl font-bold'>{t(discipline.title)}</div>
                <div className='text-base'>{t(discipline.description)}</div>
              </div>
              <div className='rounded-xl h-[240px] md:h-[420px] lg:h-[340px] w-full lg:w-1/2 relative'>
                <Image
                  loading='lazy'
                  className='rounded-xl'
                  fill
                  alt='Article illustration'
                  src={discipline.defaultImage}
                />
              </div>
            </div>
            <div className='text-black w-full md:flex md:flex-col gap-10 justify-between items-start  hidden'>
              <div className='text-3xl xl:text-4xl font-bold'>
                {t('disciplnes.scpecialists.title')}
              </div>
              <div className='flex flex-col md:flex-row text-primary-500'>
                {centers.map((item, index) => (
                  <Link key={index} href={`/disciplines/${router.query.slug}?location=${item.id}`}>
                    <div
                      className={`transition-all cursor-pointer text-base pr-5 mb-5 text-black md:m-0 ${
                        item.id === location &&
                        'font-bold underline underline-offset-8 text-primary-900'
                      } hover:font-bold hover:underline-offset-8 hover:underline`}
                    >
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
              <div className='grid grid-flow-dense grid-cols-7 gap-4 w-full'>
                <div className='text-white bg-primary-700 pl-5 font-bold text-base py-2 px-10 col-span-2'>
                  {t('specialists.title')}
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
              {specialists.map((specialist, index) => (
                <div
                  key={`loc-${index}-${specialist.title}`}
                  className='grid grid-flow-dense grid-cols-7 gap-4 w-full'
                >
                  <div className='col-span-2'>
                    <SpecialistListCardDisciplineDetail
                      title={specialist.title}
                      link={specialist.link}
                      image={specialist.avatar}
                      mainDiscipline={t(`disciplines.${specialist.mainDiscipline}.title`)}
                    />
                  </div>
                  {specialist.timetable.map((day, index) => (
                    <div key={`day-${index}`} className='w-full flex flex-row gap-2'>
                      <div
                        className={
                          day.locations.find((f) => f.location === location)?.am
                            ? 'bg-primary-700/20 mx-auto justify-center flex w-1/2'
                            : 'bg-gray-100 py-2 px-10 flex w-1/2'
                        }
                      >
                        {day.locations.find((f) => f.location === location)?.am && (
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
                          day.locations.find((f) => f.location === location)?.pm
                            ? 'bg-primary-700/20 py-2 mx-auto justify-center flex w-1/2'
                            : 'bg-gray-100 py-2 px-10 items-center flex w-1/2'
                        }
                      >
                        {day.locations.find((f) => f.location === location)?.pm && (
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
          </>
        )}
        <InfoBox title={t('appointment.title')} description={t('appointment.description')}>
          <Button message={t('appointment.button')} link={'/'} />
        </InfoBox>
        <Faq />
      </Container>
      <div className='text-black w-full bg-primary-50 py-20'>
        <div className='p-6 max-w-screen-xl mx-auto flex flex-col gap-14 items-center justify-between'>
          <div className='flex flex-col md:flex-row gap-3 justify-between items-start md:items-center w-full'>
            <div className='text-2xl sm:text-3xl font-bold leading-tight'>
              {t('home.news.title')}
            </div>
            <InvertedButton message={t('home.news.button')} link='/news' />
          </div>
          <div className='w-full grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {allArticles.slice(0, 3).map((article) => (
              <ArticleCard
                key={article.name}
                title={article.title}
                topic={t(article.topic)}
                link={article.link}
                date={article.date}
                image={article.defaultImage}
              />
            ))}
          </div>
          <Newsletter />
        </div>
      </div>
    </Layout>
  )
}
