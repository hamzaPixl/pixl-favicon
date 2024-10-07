import CodeBlock from './code_block'
import Table from './table'

export default function ManifestDetail({ imageInfo }) {
  return (
    <div className='mt-4 gap-10 flex flex-col text-black rounded-lg'>
      <div className='flex flex-col justify-start gap-4'>
        <h2 className='text-sm md:text-lg font-bold bg-gray-100 p-2 rounded-lg w-fit'>HTML tags</h2>
        <CodeBlock code={imageInfo.processed.tags} />
      </div>
      <div className='flex flex-col justify-start gap-4'>
        <h2 className='text-sm md:text-lg font-bold  bg-gray-100 p-2 rounded-lg w-fit'>Manifest</h2>
        <CodeBlock code={JSON.stringify(imageInfo.processed.manifest, null, 2)} />
      </div>
      <div className='flex flex-col justify-start gap-4'>
        <h2 className='text-sm md:text-lg font-bold  bg-gray-100 p-2 rounded-lg w-fit'>Files</h2>
        <Table data={imageInfo.processed.files} />
      </div>
    </div>
  )
}
