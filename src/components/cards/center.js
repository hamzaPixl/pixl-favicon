import Image from 'next/image'
import Link from 'next/link'

export default function CenterCard({ image, title, address, locationLink, time }) {
  return (
    <div className='flex flex-col md:flex-row items-center'>
      <div className='h-[200px] md:h-full w-full md:w-[120px] relative'>
        <Image loading='lazy' fill alt='Map center illustration' src={image} />
      </div>
      <div className='flex flex-col items-start gap-2 bg-white text-black p-5 w-full'>
        <div className='text-primary-700 text-xl font-bold'>{title}</div>
        <div className='flex flex-row gap-2 text-sm items-center'>
          <Image
            loading='lazy'
            width={20}
            height={20}
            alt='Center location illustration'
            src={'/icons/location.svg'}
          />
          <Link href={locationLink}>{address}</Link>
        </div>
        <div className='flex flex-row gap-2 text-sm items-center'>
          <Image
            loading='lazy'
            width={20}
            height={20}
            alt='Center time illustration'
            src={'/icons/time.svg'}
          />
          {time}
        </div>
      </div>
    </div>
  )
}
