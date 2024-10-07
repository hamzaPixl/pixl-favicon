import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='rounded-none bg-white p-4 py-8 md:p-8 lg:p-10 text-black shadow-sm'>
      <div className='mx-auto max-w-screen-xl flex flex-row justify-between gap-4'>
        <Link className='flex flex-col gap-4 justify-center items-center' href='/'>
          <Image src='/logo.png' alt='Pixl' width={100} height={100} />
        </Link>
        <h1 className='bg-gray-100 rounded-lg p-2 md:p-4 text-sm md:text-lg font-bold'>
          Favicon tool
        </h1>
      </div>
    </header>
  )
}
