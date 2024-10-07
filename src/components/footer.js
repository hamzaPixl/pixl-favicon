import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='rounded-none bg-white p-4 py-8 md:p-8 lg:p-10 shadow-inner'>
      <div className='mx-auto max-w-screen-xl text-center'>
        <div className='grid lg:grid-cols-3'>
          <Link
            href='/'
            className='mb-4 flex items-center text-2xl font-semibold text-gray-900 lg:mb-0'
          >
            <Image src='/logo.png' alt='Pixl' width={100} height={100} />
          </Link>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='block text-sm text-gray-500'>
            © 2024&nbsp;
            <Link href='https://pixldev.be' className='hover:underline'>
              Pixl SRL
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
