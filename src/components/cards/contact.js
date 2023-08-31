import Image from 'next/image'
import Link from 'next/link'
import { useTranslate } from '../../hooks/useTranslate'
import injected from '../../injected.json'

export default function ContactCard({ className }) {
  const { t } = useTranslate()
  return (
    <div
      className={
        className ||
        'flex justify-between items-start md:items-center md:flex-row flex-col gap-2 bg-primary-700 rounded-xl text-white font-bold p-6 w-full'
      }
    >
      <div className='text-xl xl:text-2xl'>{t('contact')}</div>
      <div className='text-base flex flex-col md:flex-row gap-2'>
        <div className='flex flex-row gap-2'>
          <Image
            loading='lazy'
            width={20}
            height={20}
            alt='Contact phone illustration'
            src={'/icons/phone.svg'}
          />
          <Link href={`tel:+${injected.tel}`}>{injected.tel}</Link>
        </div>
        <div className='flex flex-row gap-2'>
          <Image
            loading='lazy'
            width={20}
            height={20}
            alt='Contact mail illustration'
            src={'/icons/mail.svg'}
          />
          <Link href={`mailto:+${injected.email}`}>{injected.email}</Link>
        </div>
      </div>
    </div>
  )
}
