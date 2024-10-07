import { Spinner } from 'flowbite-react'

export default function Processing() {
  return (
    <div className='bg-gray-100 rounded-lg w-full flex flex-col gap-4 text-center p-10'>
      <Spinner aria-label='Progress' size='xl' color='success' />
      <p className='text-lg font-bold text-black'>Processing...</p>
    </div>
  )
}
