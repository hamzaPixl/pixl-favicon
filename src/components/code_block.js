import { Check } from 'flowbite-react-icons/outline'
import { Clipboard } from 'flowbite-react-icons/solid'
import { useState } from 'react'

export default function CodeBlock({ code }) {
  const [isCodeCopied, setCodeCopied] = useState(false)

  function copyToClipboardTooltip(action, content) {
    return (
      <button
        onClick={() => copyToClipboard(action, content)}
        type='button'
        className='rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
      >
        <Clipboard className='h-4 w-4' />
      </button>
    )
  }

  const copiedToClipboardTooltip = (
    <span className='rounded-lg px-2 py-1.5 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-800'>
      <Check className='h-4 w-4' />
    </span>
  )

  function copyToClipboard(callback, content) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        callback(true)
        setTimeout(() => {
          callback(false)
        }, 2000)
      })
      .catch((err) => {
        console.error('Failed to copy to clipboard:', err)
        callback(false)
      })
  }

  return (
    <div className='w-full max-w-lg'>
      <div className='relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-auto'>
        <div className='overflow-scroll max-h-full'>
          <pre>
            <code
              id='code-block'
              className='text-sm text-gray-500 dark:text-gray-400 whitespace-pre'
            >
              {code}
            </code>
          </pre>
        </div>
        <div className='absolute top-2 end-2 bg-gray-50 dark:bg-gray-700'>
          <div
            onClick={() => copyToClipboard(setCodeCopied, code)}
            className='text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border'
          >
            {isCodeCopied ? copiedToClipboardTooltip : copyToClipboardTooltip(setCodeCopied, code)}
          </div>
        </div>
      </div>
    </div>
  )
}
