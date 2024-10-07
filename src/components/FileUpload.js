import { Label } from 'flowbite-react'

export default function FileUpload() {
  return (
    <div className='flex flex-col w-full items-center justify-center'>
      <Label htmlFor='dropzone-file' className='mb-2 hidden'>
        Product Images
      </Label>
      <div className='flex w-full items-center justify-center'>
        <Label
          htmlFor='dropzone-file'
          className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 shadow-md'
        >
          <div className='flex flex-col items-center justify-center pb-6 pt-5'>
            <svg
              aria-hidden
              className='mb-3 h-10 w-10 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
              />
            </svg>
            <p className='mb-2 text-sm text-gray-500'>
              <span className='font-semibold'>Click to upload</span>
              &nbsp;or drag and drop
            </p>
            <p className='text-xs text-gray-500'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id='dropzone-file' name='dropzone-file' type='file' className='hidden' />
        </Label>
      </div>
    </div>
  )
}
