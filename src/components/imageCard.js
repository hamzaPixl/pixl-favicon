import Link from 'next/link'
import { ChromeView } from './tab_chrome'
import Image from 'next/image'

export default function ImageCard({ imageInfo }) {
  return (
    <div className='flex flex-col justify-center gap-5'>
      <p className='font-bold text-xs md:text-lg bg-green-400 mx-auto text-white p-1 md:p-2 rounded-lg'>
        File uploaded successfully
      </p>
      <div className='flex flex-col border-2 border-black rounded-lg'>
        <ChromeView
          icon={`/${imageInfo.processed?.files?.find((f) => f.name === 'favicon.ico')?.url}`}
        />
        <div className='flex flex-col gap-4 justify-center items-center rounded-b-lg p-5'>
          <Image
            className='rounded-lg shadow-md'
            height={150}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII='
            width={150}
            src={imageInfo.url}
            alt={imageInfo.base.name}
          />
          <div className='flex flex-col justify-center gap-4 text-black'>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center text-xs md:text-md'>
              <Link
                rel='noopener noreferrer'
                target='_blank'
                href={imageInfo.zip_url}
                download='pixl-favicons.zip'
                className='shadow-md bg-green-500 hover:bg-white hover:text-green-500 text-white font-bold p-2 rounded border-2 border-green-500 hover:border-green-500'
              >
                Download zip
              </Link>
              <Link
                className='shadow-md bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold p-2 rounded border-2 border-blue-500 hover:border-blue-500'
                href='/'
              >
                Upload another file
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
