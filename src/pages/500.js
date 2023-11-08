import Link from 'next/link'
import { useTranslate } from '../hooks/useTranslate'

export default function Maintenance() {
  const { t } = useTranslate()
  return (
    <section className=''>
      <div className='grid-cols-2 gap-8 content-center py-8 px-4 mx-auto max-w-screen-xl md:grid lg:py-16 lg:px-6'>
        <div className='self-center'>
          <h1 className='mb-4 text-2xl font-bold text-black'>{t('maintenance.title')}</h1>
          <p className='mb-4 text-3xl tracking-tight font-bold lg:mb-10 md:text-4xl text-black'>
            {t('maintenance.description')}
          </p>
          <p className='mb-10 text-3xl tracking-tight font-bold text-black md:text-4x'>
            {t('notfound.message')}
          </p>
          <Link
            className='mb-4 text-primary-600 border-b-2 py-2 border-transparent hover:border-primary-600 transition-all ease-in-out duration-300'
            href={'/'}
          >
            {t('notfound.back')}
          </Link>
        </div>
        <img
          className='hidden mx-auto mb-4 md:flex'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/500/500.svg'
          alt='500 Server Error'
        />
      </div>
    </section>
  )
}
