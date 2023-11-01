import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/cards/newsletter'
import Container from '../components/container'
import { ButtonSecondary, InvertedButton } from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import TeamMember from '../components/cards/teamMember'
import InfoSection from '../components/infoSection'
import UspCard from '../components/cards/usp'
import { members } from '../api/members'

export default function About() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <InfoSection
          title={t('about.title')}
          description={t('about.description')}
          image={'/images/about.png'}
        >
          <InvertedButton message={t('about.button.primary')} link='/about' />
          <ButtonSecondary message={t('about.button.secondary')} link='/contact' />
        </InfoSection>

        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          {Array.from({ length: 3 }).map((_, index) => (
            <UspCard
              key={`usp-${index}`}
              title={t(`home.usp.${index + 1}.title`)}
              description={t(`home.usp.${index + 1}.description`)}
            />
          ))}
        </div>
      </Container>
      <div className='bg-gray-100'>
        <Container>
          <div className='flex flex-col items-start gap-4 w-full'>
            <div className='text-2xl lg:text-4xl font-bold'>{t('about.members.title')}</div>
            <div className='max-w-xl text-base'>{t('about.members.description')}</div>
          </div>
          <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-4 gap-4 w-full'>
            {members.map((member) => (
              <TeamMember key={member.name} name={member.name} image={member.image} />
            ))}
          </div>
          <Newsletter />
        </Container>
      </div>
    </Layout>
  )
}
