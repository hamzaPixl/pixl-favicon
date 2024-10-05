import Link from 'next/link'

export default function Table({ data }) {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              File name
            </th>
            <th scope='col' className='px-6 py-3'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, index) => (
            <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='text-sm font-medium text-gray-900 dark:text-white'>{file.name}</div>
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                <div className='flex items-center'>
                  <Link
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-green-500 hover:text-green-900'
                    href={file.url}
                    download={file.name}
                  >
                    Download
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
