import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { useTranslate } from '../hooks/useTranslate'
import ArticleCard from '../components/cards/article'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { allArticles, filters } from '../api/articles'
import Newsletter from '../components/cards/newsletter'
import Container from '../components/container'

export default function News() {
  const router = useRouter()
  const { t } = useTranslate()
  const [articles, setArticles] = useState(allArticles)
  const [filter, setFilter] = useState(filters[0])

  useEffect(() => {
    if (router.query.filter?.length > 0) {
      setFilter(router.query.filter)
      const filter = allArticles.find((item) => item.topic === router.query.filter)
      if (router.query.filter === filters[0]) {
        return setArticles(allArticles)
      }
      setArticles(allArticles.filter((item) => item.topic === filter?.topic) || [])
    }
  }, [router.query])

  return (
    <Layout>
      <div className='bg-gray-100'>
        <Container>
          <div className='flex flex-col items-start justify-between  gap-4 w-full'>
            <div className='text-2xl xl:text-4xl font-bold'>{t('articles.title')}</div>
            <div className='text-base font-normal max-w-2xl'>{t('articles.description')}</div>
            <div className='flex flex-col md:flex-row text-primary-500'>
              {filters.map((item, index) => (
                <Link key={index} href={`/news?filter=${item}`}>
                  <div
                    className={`transition-all cursor-pointer text-base pr-5 mb-5 text-black md:m-0 ${
                      item === filter && 'font-bold underline underline-offset-8 text-primary-900'
                    } hover:font-bold hover:underline-offset-8 hover:underline`}
                  >
                    {t(item)}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className='items-center w-full'>
            <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4'>
              {articles.map((article) => (
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
          </div>

          <Newsletter />
        </Container>
      </div>
    </Layout>
  )
}
