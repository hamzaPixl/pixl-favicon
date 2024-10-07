import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import ImageCard from '../../components/imageCard'
import Processing from '../../components/processing'
import ManifestDetail from '../../components/manifestDetail'
import ErrorMessage from '../../components/errorMessage'
import Link from 'next/link'

export default function RequestSlug() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    const id = router.query.id
    setLoading(true)

    const fetchData = async (attempt = 1) => {
      try {
        if (id) {
          const response = await fetch(`/api/upload/${id}`)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          const data = await response.json()
          setResult(data)
          setLoading(false)
        }
      } catch (err) {
        if (attempt < 5) {
          setTimeout(() => fetchData(attempt + 1), 1000)
        } else {
          setError('Failed to fetch data after 5 attempts')
          setLoading(false)
        }
      }
    }

    setTimeout(() => fetchData(), 1000)
  }, [router.query.id])

  return (
    <Layout>
      {error && (
        <div className='flex flex-col justify-center gap-4 items-center'>
          <ErrorMessage error={error} />
          <Link href='/' className='text-md p-2 text-white bg-red-500 hover:bg-red-700 rounded-lg'>
            Go back
          </Link>
        </div>
      )}
      {loading && <Processing />}
      {result && <ImageCard imageInfo={result} />}
      {result && <ManifestDetail imageInfo={result} />}
    </Layout>
  )
}
