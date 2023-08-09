import React from 'react'

export default function Faq() {
  return (
    <section>
      <div className='py-10 mx-auto max-w-screen-2xl text-global'>
        <h2 className='mb-6 text-3xl font-bold'>Frequently asked questions</h2>
        <div>
          <div
            id='accordion-flush'
            data-accordion='collapse'
            data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
            data-inactive-classes='text-gray-500 dark:text-gray-400'
          >
            <h2 id='accordion-flush-heading-1'>
              <button
                type='button'
                className='flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
                data-accordion-target='#accordion-flush-body-1'
                aria-expanded='true'
                aria-controls='accordion-flush-body-1'
              >
                <span>Can I use Flowbite in open-source projects?</span>
                <svg
                  data-accordion-icon=''
                  className='w-6 h-6 rotate-180 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-1'
              className=''
              aria-labelledby='accordion-flush-heading-1'
            >
              <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  Flowbite is an open-source library of interactive components built on top of
                  Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Check out this guide to learn how to{' '}
                  <a href='#' className='text-primary-600 dark:text-primary-500 hover:underline'>
                    get started
                  </a>{' '}
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id='accordion-flush-heading-2'>
              <button
                type='button'
                className='flex justify-between items-center py-5 w-full font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                data-accordion-target='#accordion-flush-body-2'
                aria-expanded='false'
                aria-controls='accordion-flush-body-2'
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon=''
                  className='w-6 h-6 shrink-0'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id='accordion-flush-body-2'
              className='hidden'
              aria-labelledby='accordion-flush-heading-2'
            >
              <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  Flowbite is first conceptualized and designed using the Figma software so
                  everything you see in the library has a design equivalent in our Figma file.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                  Check out the{' '}
                  <a href='#' className='text-primary-600 dark:text-primary-500 hover:underline'>
                    Figma design system
                  </a>{' '}
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
