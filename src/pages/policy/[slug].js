import React from 'react'
import Layout from '../../components/layout'
import { useTranslate } from '../../hooks/useTranslate'
import { useRouter } from 'next/router'

export default function PolicyDetail() {
  const router = useRouter()
  const { t } = useTranslate()

  return (
    <Layout>
      <h1 className='text-xl md:text-4xl font-bold'>{t(`policy.${router.query.slug}.page`)}</h1>
    </Layout>
  )
}
