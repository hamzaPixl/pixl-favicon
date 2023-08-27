import React from 'react'

export default function Faq() {
  return (
    <div className='text-black w-full flex flex-col gap-10 justify-between items-start'>
      <div className='flex flex-col gap-4'>
        <div className='text-3xl xl:text-4xl font-bold'>Frequently asked questions</div>
        <div className='max-w-xl text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nisl mi. Donec vel
          viverra nulla, non lacinia est. Fusce posuere maximus elit non porta.
        </div>
      </div>
      <details className='w-full mb-2 rounded-xl border border-slate-200 bg-none p-5 duration-300 open:bg-white shadow-lg open:text-primary-700 group'>
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
      <details className='w-full mb-2 rounded-xl border border-slate-200 bg-none p-5 duration-300 open:bg-white shadow-lg open:text-primary-700 group'>
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
      <details className='w-full mb-2 rounded-xl border border-slate-200 bg-none p-5 duration-300 open:bg-white shadow-lg open:text-primary-700 group'>
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
