import Image from 'next/image'

export default function InfoSection({ title, description, image, children }) {
  return (
    <div className='text-black w-full flex flex-col lg:flex-row gap-10 justify-between items-center'>
      <div className='flex flex-col gap-4 max-w-2xl'>
        <div className='text-3xl xl:text-4xl font-bold'>{title}</div>
        <div className='text-base'>{description}</div>
        <div className='flex flex-col w-full md:w-auto md:flex-row gap-4 justify-between md:justify-start'>
          {children}
        </div>
      </div>
      <div className='rounded-xl h-[240px] md:h-[420px] lg:h-[340px] w-full relative'>
        <Image loading='lazy' className='rounded-xl' fill alt='Article illustration' src={image} />
      </div>
    </div>
  )
}
