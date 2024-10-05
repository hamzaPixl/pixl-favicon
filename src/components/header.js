import Image from 'next/image'

export default function Header() {
  return (
    <header className='rounded-none bg-white p-4 py-8 dark:bg-gray-800 md:p-8 lg:p-10 text-black'>
      <div className='mx-auto max-w-screen-xl flex flex-row justify-between gap-4'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <Image src='/logo.png' alt='Pixl' width={100} height={100} />
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-xl font-bold'>Favicon tool</h1>
        </div>
      </div>
    </header>
  )
}
