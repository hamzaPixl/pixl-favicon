import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { useRouter } from 'next/router'
import Layout from '../components/layout'
import ErrorMessage from '../components/errorMessage'
import FileUpload from '../components/FileUpload'
import Divider from '../components/divider'
import UrlInput from '../components/urlInput'
import UploadHeader from '../components/uploadHeader'

export default function Home() {
  const router = useRouter()
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
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
      const cid = v4()
      formData.append('file', file)
      formData.append('cid', cid)

      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      router.push(`/requests/${cid}`)
    }
  }, [file])

  return (
    <Layout>
      <div className='flex flex-col gap-4 items-center'>
        <UploadHeader />
        <UrlInput url={url} handleUrlChange={handleUrlChange} />
        <Divider />
        <FileUpload />
        <ErrorMessage error={error} />
      </div>
    </Layout>
  )
}
