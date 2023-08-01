import React from 'react'
import Button, { InvertedButton } from '../button'

export default function AboutCard({
  title,
  description,
  mainLink,
  mainLinkText,
  secondaryLink,
  secondaryLinkText,
}) {
  return (
    <div className={`bg-globalText flex flex-col justify-between items-left p-4 md:p-10`}>
      <div className='text-background  max-w-xl py-5'>
        <div className='text-lg md:text-3xl font-bold pb-5'>{title}</div>
        <div className='text:xs md:text-base font-normal leading-normal'>{description}</div>
      </div>
      <div className='flex flex-row justify-start'>
        {mainLink && mainLinkText && <InvertedButton message={mainLinkText} link={mainLink} />}
        {secondaryLink && secondaryLinkText && (
          <Button message={secondaryLinkText} link={secondaryLink} />
        )}
      </div>
    </div>
  )
}