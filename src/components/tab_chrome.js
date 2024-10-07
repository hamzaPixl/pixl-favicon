import Image from 'next/image'

export function TabChrome({ bgTab = 'bg-white', title = 'Favicon', icon = '/favicon.ico' }) {
  return (
    <div className={`${bgTab} p-2 md:p-3 rounded-t-xl`}>
      <div className='flex flex-row gap-4 justify-between items-center text-gray-700'>
        <div className='flex flex-row gap-1 items-center'>
          <Image src={icon} alt='Favicon preview' width={24} height={24} />
          <h1 className='text-xs'>{title}</h1>
        </div>
        <svg
          className='w-6 h-6 text-gray-800'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M6 18 17.94 6M18 18 6.06 6'
          />
        </svg>
      </div>
    </div>
  )
}

export function ChromeView({ icon = '/favicon.ico' }) {
  return (
    <div className='bg-gray-200 pt-5 px-5 flex flex-row gap-1 rounded-t-lg'>
      <TabChrome icon={icon} />
      <TabChrome icon={icon} bgTab='bg-gray-100' />
    </div>
  )
}
