import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import { useTranslate } from '../hooks/useTranslate'
import Container from '../components/container'
import injected from '../injected.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const { t } = useTranslate()
  return (
    <Layout>
      <div className='w-full bg-[image:url(/images/hero.png)] bg-cover bg-center bg-no-repeat relative h-[485px] items-center hidden md:flex'>
        <div className='text-white h-full w-full flex flex-col gap-4 items-center justify-center p-6 bg-black/70'>
          <div className='max-w-screen-xl mx-auto flex flex-col gap-4'>
            <Button message={t('header.appointment')} link={injected.rdv} />
            <div className='flex flex-row gap-10 justify-between items-center text-center'>
              {injected.socials.map((item, index) => (
                <Link key={index} className='text-white bg-red-600 p-4 rounded-md' href={item.link}>
                  <Image
                    loading='lazy'
                    width={25}
                    height={25}
                    className='cursor-pointer hover:scale-110 transform transition-transform duration-300'
                    src={`/icons/${item.title}.svg`}
                    alt={`Social ${item.title} - ${item.link}`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='flex md:hidden relative overflow-hidden'>
        <video
          class='w-full h-auto max-w-full'
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: 'auto',
            filter: 'brightness(70%)',
          }}
        >
          <source src='/images/hero.mp4' type='video/mp4' />
          Votre brower ne supporte pas la vidéo
        </video>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-4 items-center justify-center p-6 bg-black/70'>
          <Button message={t('header.appointment')} link={injected.rdv} />
          <div className='flex flex-row gap-10 justify-between items-center text-center'>
            {injected.socials.map((item, index) => (
              <Link key={index} className='text-white bg-red-600 p-4 rounded-md' href={item.link}>
                <Image
                  loading='lazy'
                  width={25}
                  height={25}
                  className='cursor-pointer hover:scale-110 transform transition-transform duration-300'
                  src={`/icons/${item.title}.svg`}
                  alt={`Social ${item.title} - ${item.link}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Container id='#services'>
        <div className='text-white flex flex-col gap-4 justify-center items-center text-center'>
          <div className='text-2xl font-bold bg-red-600 p-2'>{t('home.services.title')}</div>
          <div className='text-base max-w-xl'>{t('home.services.description')}</div>
        </div>
        <Image
          className='rounded-md bg-white p-2'
          loading='lazy'
          width={300}
          height={300}
          src='/images/services.png'
          alt='Image'
        />
        <div className='flex flex-col gap-4 justify-center items-center flex-wrap text-white'>
          <div className='text-base max-w-xl'>{t('home.services.description.1')}</div>
          <div className='text-base max-w-xl'>{t('home.services.description.2')}</div>
          <div className='text-base max-w-xl'>{t('home.services.description.3')}</div>
          <div className='text-base max-w-xl'>{t('home.services.description.4')}</div>
        </div>
      </Container>

      <Container id='#gallery'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
            <div>
              <Image
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
                alt=''
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container id='#team'>
        <div className='text-white flex flex-col justify-center text-center gap-4'>
          <div className='text-2xl font-bold bg-red-600 p-2'>{t('home.team.title')}</div>
          <div className='text-base max-w-xl'>{t('home.team.description')}</div>
        </div>
        <div className='flex flex-row gap-4 justify-center items-center flex-wrap'>
          <div className='bg-white p-6 group flex flex-col gap-4 hover:bg-red-600 hover:transition-all hover:scale-105 hover:duration-300 duration-300'>
            <Image
              loading='lazy'
              width={250}
              height={250}
              className='rounded-md'
              src='/images/coiffeur.png'
              alt='Image'
            />
            <div>
              <div className='text-black font-bold group-hover:text-white'>John Doe</div>
              <div className='text-red-500 group-hover:text-white'>CEO</div>
            </div>
          </div>
          <div className='bg-white p-6 group flex flex-col gap-4 hover:bg-red-600 hover:transition-all hover:scale-105 hover:duration-300 duration-300'>
            <Image
              loading='lazy'
              width={250}
              height={250}
              className='rounded-md'
              src='/images/coiffeur.png'
              alt='Image'
            />
            <div>
              <div className='text-black font-bold group-hover:text-white'>John Doe</div>
              <div className='text-red-500 group-hover:text-white'>CEO</div>
            </div>
          </div>
        </div>
      </Container>

      <Container id='#contact'>
        <div className='flex flex-col md:flex-row'>
          <div className='bg-white p-10 flex flex-col gap-4 justify-center items-left'>
            <div className='text-2xl font-bold text-black'>{t('home.contact.title')}</div>
            <div className='flex gap-2 text-center'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                src='/icons/phone-primary.svg'
                alt='Icon tel'
              />
              <Link
                className='text-black hover:text-red-600 hover:translate-x-1 transition-transform ease-in-out duration-300'
                href={`tel:${injected.tel}`}
              >
                {injected.tel}
              </Link>
            </div>
            <div className='flex gap-2 text-center'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                src='/icons/mail-primary.svg'
                alt='Icon mail'
              />
              <Link
                className='text-black hover:text-red-600 hover:translate-x-1 transition-transform ease-in-out duration-300'
                href={`mailto:${injected.email}`}
              >
                {injected.email}
              </Link>
            </div>
            <div className='flex gap-2 text-center'>
              <Image
                loading='lazy'
                width={24}
                height={24}
                src='/icons/location.svg'
                alt='Icon address'
              />
              <Link
                href={injected.address.url}
                className='text-black hover:text-red-600 hover:translate-x-1 transition-transform ease-in-out duration-300'
              >
                {injected.address.address}
              </Link>
            </div>
          </div>
          <div className='bg-red-600 p-10 flex flex-col gap-4 justify-center items-left'>
            <div className='flex flex-row gap-2'>
              <Image loading='lazy' width={24} height={24} src='/icons/time.svg' alt='Image' />
              <div className='text-2xl font-bold text-white'>{t('home.horaire.title')}</div>
            </div>
            <div className='text-white flex flex-row gap-2'>
              <h3>Lundi :</h3>
              <p>Fermé</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Mardi :</h3>
              <p>10h - 20h</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Mercredi :</h3>
              <p>10h - 20h</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Jeudi :</h3>
              <p>10h - 20h</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Vendredi :</h3>
              <p>10h - 20h</p>
            </div>
            <div className='text-white flex flex-row gap-2 font-bold'>
              <h3>Samedi :</h3>
              <p>10h - 15h</p>
            </div>
            <div className='text-white flex flex-row gap-2'>
              <h3>Dimanche :</h3>
              <p>Fermé</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
