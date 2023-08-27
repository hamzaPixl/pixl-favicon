import React from 'react'

export default function Faq() {
  return (
    <div className='w-full'>
      <details className='mb-2 rounded-xl border border-slate-200 bg-none p-5 duration-300 open:bg-white shadow-lg open:text-primary-700 group'>
        <summary className='flex flex-row w-full justify-between items-center cursor-pointer list-none text-base font-bold'>
          Do I have to allow the use of cookies?
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
        <p className='pt-10 text-base text-black'>
          Yes, in order to use My Page, you must allow the use of cookies in your browser.
          <br />
          <br />
          See also: What is a cookie and what does it do?
        </p>
      </details>
      <details className='mb-2 rounded-xl border border-slate-200 bg-none p-5 duration-300 open:bg-white shadow-lg open:text-primary-700 group'>
        <summary className='flex flex-row w-full justify-between items-center cursor-pointer list-none text-base font-bold'>
          Do I have to allow the use of cookies?
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
        <p className='pt-10 text-base text-black'>
          Yes, in order to use My Page, you must allow the use of cookies in your browser.
          <br />
          <br />
          See also: What is a cookie and what does it do?
        </p>
      </details>
      <details className='mb-2 rounded-xl border border-slate-200 bg-none p-5 duration-300 open:bg-white shadow-lg open:text-primary-700 group'>
        <summary className='flex flex-row w-full justify-between items-center cursor-pointer list-none text-base font-bold'>
          Do I have to allow the use of cookies?
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
        <p className='pt-10 text-base text-black'>
          Yes, in order to use My Page, you must allow the use of cookies in your browser.
          <br />
          <br />
          See also: What is a cookie and what does it do?
        </p>
      </details>
    </div>
  )
}
