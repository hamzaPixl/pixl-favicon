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

export default function DisciplineDetail() {
  const router = useRouter()
  const { t } = useTranslate()
  const [discipline, setDiscipline] = useState()

  useEffect(() => {
    if (router.query.slug?.length > 0) {
      setDiscipline(allDisciplines.find((item) => item.name === router.query.slug))
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
            <div className='text-black w-full flex flex-col lg:flex-row gap-10 justify-between items-start'>
              <div className='text-3xl xl:text-4xl font-bold'>Our specialists</div>
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
