export default function UspCard({ title, description }) {
  return (
    <div className='flex flex-col items-start gap-4'>
      <div className='text-2xl font-bold'>{title}</div>
      <div className='text-base'>{description} </div>
    </div>
  )
}
