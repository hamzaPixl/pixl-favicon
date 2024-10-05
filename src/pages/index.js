import React, { useEffect, useState } from 'react'
import { Label } from 'flowbite-react'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import Container from '../components/container'
import Image from 'next/image'
import Table from '../components/table'
import CodeBlock from '../components/code_block'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [url, setUrl] = useState('')

  useEffect(() => {
    const dropzoneFile = document.getElementById('dropzone-file')
    dropzoneFile.addEventListener('change', (e) => {
      if (e.target.files.length > 1) {
        setError('Only one file at a time')
      } else {
        if (!e.target.files[0].type.includes('image')) {
          setError('Invalid file type')
          return
        }
        setLoading(true)
        setFile(e.target.files[0])
        setError(null)
      }
    })
  }, [])

  const handleUrlChange = async (e) => {
    const url = e.target.value
    setUrl(url)
    if (url) {
      try {
        const response = await fetch(url)
        if (!response.headers.get('content-type').startsWith('image')) {
          console.error('The URL is not an image')
          setError('The URL is not an image')
          return
        }
        setLoading(true)
        setFile(new File([await response.blob()], 'image.jpg'))
        setError(null)
        setUrl('')
      } catch (error) {
        console.error('Error fetching the image:', error)
        setError('Error fetching the image')
      }
    }
  }

  useEffect(() => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.success) {
            setLoading(false)
            setError(data.message)
            setFile(null)
          } else {
            setLoading(false)
            setResult(data)
          }
        })
        .catch(() => {
          setLoading(false)
          setError('An error occurred')
          setFile(null)
        })
    }
  }, [file])

  return (
    <Layout>
      <Container>
        {!file && (
          <div className='flex flex-col gap-4 items-center'>
            <div className='mb-4 p-4 bg-gray-100 text-gray-700 rounded-lg dark:bg-gray-800 dark:text-gray-200 shadow-md text-center'>
              <h1 className='text-2xl font-bold'>Upload your image</h1>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                You can upload an image from your computer or provide a URL
              </p>
            </div>
            <div className='p-4 bg-gray-100 text-gray-700 rounded-lg dark:bg-gray-800 dark:text-gray-200 shadow-md'>
              <input
                type='text'
                placeholder='Enter image URL'
                value={url}
                onChange={handleUrlChange}
                className='p-2 border rounded'
              />
            </div>
            <div className='inline-flex items-center justify-center w-full'>
              <hr className='w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700' />
              <div className='absolute text-center my-2 text-black bg-white p-2'>OR</div>
            </div>
            <div className='flex flex-col w-full items-center justify-center'>
              <Label htmlFor='dropzone-file' className='mb-2 hidden'>
                Product Images
              </Label>
              <div className='flex w-full items-center justify-center'>
                <Label
                  htmlFor='dropzone-file'
                  className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 shadow-md'
                >
                  <div className='flex flex-col items-center justify-center pb-6 pt-5'>
                    <svg
                      aria-hidden
                      className='mb-3 h-10 w-10 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                      />
                    </svg>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-semibold'>Click to upload</span>
                      &nbsp;or drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id='dropzone-file' name='dropzone-file' type='file' className='hidden' />
                </Label>
              </div>
              <div>
                {error && (
                  <div className='mt-4 p-4 bg-red-100 text-red-700 rounded-lg dark:bg-red-800 dark:text-red-200'>
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className='mt-4 p-4 bg-gray-100 text-gray-700 rounded-lg dark:bg-gray-800 dark:text-gray-200'>
            Loading...
          </div>
        )}

        {result && (
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <Image
                className='rounded-lg shadow-md'
                height={300}
                placeholder='blur'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII='
                width={300}
                src={result.url}
                alt={result.base.name}
              />
              <div className='mt-4 p-4 bg-green-100 text-green-700 rounded-lg dark:bg-green-800 dark:text-green-200 shadow-lg'>
                <p>File uploaded successfully</p>
                <p>File name: {result.base.name}</p>
                <p>File size: {result.base.size}</p>
                <p>File type: {result.base.type}</p>
                <p>Request cid: {result.cid}</p>
              </div>
            </div>

            <div className='flex flex-row gap-4 justify-center items-center'>
              <button
                className='shadow-md bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded border-2 border-blue-500 hover:border-blue-500'
                onClick={() => {
                  router.reload()
                }}
              >
                Upload another file
              </button>
              <Link
                rel='noopener noreferrer'
                target='_blank'
                href={result.zip_url}
                download='pixl-favicons.zip'
                className='shadow-md bg-green-500 hover:bg-white hover:text-green-500 text-white font-bold py-2 px-4 rounded border-2 border-green-500 hover:border-green-500'
              >
                Download zip
              </Link>
            </div>
            {result.processed?.manifest && (
              <div className='shadow-md mt-4 gap-4 flex flex-col p-4 bg-gray-100 text-gray-700 rounded-lg dark:bg-gray-800 dark:text-gray-200'>
                <CodeBlock code={result.processed.tags} />
                <Table data={result.processed.files} />
              </div>
            )}
          </div>
        )}
      </Container>
    </Layout>
  )
}
