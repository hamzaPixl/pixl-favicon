export default function UrlInput({ url, handleUrlChange }) {
  return (
    <div className='p-4 bg-gray-100 text-gray-700 rounded-lg shadow-md'>
      <input
        type='text'
        placeholder='Enter image URL'
        value={url}
        onChange={handleUrlChange}
        className='p-2 border rounded'
      />
    </div>
  )
}
