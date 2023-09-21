import React from 'react'

export default function InfoBox({ title, description, children }) {
  return (
    <div className='rounded-xl text-white bg-primary-700 p-8 px-10 flex flex-col xl:flex-row gap-5 items-start xl:items-end justify-between'>
      <div className='flex flex-col gap-5 items-start'>
        <div className='text-2xl font-bold leading-tight'>{title}</div>
        <div className='text-base font-normal leading-normal'>{description}</div>
      </div>
      {children}
    </div>
  )
}

export function InfoBoxList({ title, description, children }) {
  return (
    <div className='rounded-xl text-white bg-primary-700 p-8 px-10 flex flex-col gap-5 items-start justify-between'>
      <div className='flex flex-col gap-5 items-start'>
        <div className='text-2xl font-bold leading-tight'>{title}</div>
        <div className='text-base font-normal leading-normal'>{description}</div>
      </div>
      {children}
    </div>
  )
}
