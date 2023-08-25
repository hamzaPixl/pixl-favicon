import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/cards/newsletter'
import Container from '../components/container'
import { ButtonSecondary, InvertedButton } from '../components/button'
import Image from 'next/image'
import { useTranslate } from '../hooks/useTranslate'
import TeamMember from '../components/cards/teamMember'

export default function About() {
  const { t } = useTranslate()
  return (
    <Layout>
      <Container>
        <div className='text-black w-full flex flex-col lg:flex-row gap-10 justify-between items-center'>
          <div className='flex flex-col gap-4'>
            <div className='text-3xl xl:text-4xl font-bold'>About us</div>
            <div className='text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam in
              consectetur aliquam, lacus velit luctus massa, vitae ullamcorper nisl nunc quis
              sapien. Sed euismod, diam in consectetur aliquam, lacus velit luctus massa, vitae
              ullamcorper nisl nunc quis sapien.
            </div>
            <div className='flex flex-col w-full md:w-auto md:flex-row gap-4 justify-between md:justify-start'>
              <InvertedButton message={t('home.about.button.primary')} link='/about' />
              <ButtonSecondary message={t('home.about.button.secondary')} link='/centers' />
            </div>
          </div>
          <div className='rounded-xl h-[240px] md:h-[420px] lg:h-[340px] w-full relative'>
            <Image
              loading='lazy'
              className='rounded-xl'
              fill
              alt='Article illustration'
              src={'/images/about.png'}
            />
          </div>
        </div>

        <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          <div className='flex flex-col items-start gap-4'>
            <div className='text-2xl font-bold'>{t('home.usp.1.title')}</div>
            <div className='text-base'>{t('home.usp.1.description')} </div>
          </div>
          <div className='flex flex-col items-start gap-4'>
            <div className='text-2xl font-bold'>{t('home.usp.2.title')}</div>
            <div className='text-base'>{t('home.usp.2.description')} </div>
          </div>
          <div className='flex flex-col items-start gap-4'>
            <div className='text-2xl font-bold'>{t('home.usp.3.title')}</div>
            <div className='text-base'>{t('home.usp.3.description')} </div>
          </div>
        </div>
      </Container>
      <div className='bg-gray-100'>
        <Container>
          <div className='flex flex-col items-start gap-4 w-full'>
            <div className='text-2xl lg:text-4xl font-bold'>Nos membres</div>
            <div className='max-w-xl text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
          </div>
          <div className='grid grid-flow-dense grid-cols-1 md:grid-cols-4 gap-4 w-full'>
            <TeamMember name='John Doe' role='CEO' image='/images/team/john-doe.png' />
            <TeamMember name='John Doe' role='CEO' image='/images/team/john-doe.png' />
            <TeamMember name='John Doe' role='CEO' image='/images/team/john-doe.png' />
            <TeamMember name='John Doe' role='CEO' image='/images/team/john-doe.png' />
          </div>
          <Newsletter />
        </Container>
      </div>
    </Layout>
  )
}
