export default function ErrorMessage({ error }) {
  return error && <div className='mt-4 p-4 bg-red-100 text-red-700 rounded-lg'>{error}</div>
}
