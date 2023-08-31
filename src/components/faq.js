import React from 'react'
import { useTranslate } from '../hooks/useTranslate'

export default function Faq() {
  const { t } = useTranslate()
  return (
    <div className='text-black w-full flex flex-col gap-10 justify-between items-start'>
      <div className='flex flex-col gap-4'>
        <div className='text-3xl xl:text-4xl font-bold'>{t('faq.title')}</div>
        <div className='max-w-xl text-base'>{t('faq.description')}</div>
      </div>

      {Array.from({ length: 4 }).map((_, i) => (
        <details
          key={`faq-${i + 1}`}
          className='w-full mb-2 rounded-xl border border-slate-200 bg-none p-5 duration-300 open:bg-white shadow-lg open:text-primary-700 group'
        >
          <summary className='flex flex-row w-full justify-between items-center cursor-pointer list-none text-base font-bold'>
            {t(`faq.question${i + 1}`)}
            <div className='block cursor-pointer group-open:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='{1.5}'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
            </div>
          </summary>
          <p className='pt-10 text-base text-black'>{t(`faq.answer${i + 1}`)}</p>
        </details>
      ))}
    </div>
  )
}
