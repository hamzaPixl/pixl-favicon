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
        className='rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-100'
      >
        <Clipboard className='h-4 w-4' />
      </button>
    )
  }

  const copiedToClipboardTooltip = (
    <span className='rounded-lg px-2 py-1.5 text-green-700 hover:bg-gray-100'>
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
    <div className='relative bg-gray-100 rounded-lg p-4 h-auto border-2 border-black'>
      <div className='overflow-scroll max-h-full'>
        <pre>
          <code id='code-block' className='text-sm text-gray-500  whitespace-pre'>
            {code}
          </code>
        </pre>
      </div>
      <div className='absolute top-2 end-2 bg-gray-50 rounded-lg'>
        <div
          onClick={() => copyToClipboard(setCodeCopied, code)}
          className='text-gray-900 hover:bg-gray-100 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-400 border-2'
        >
          {isCodeCopied ? copiedToClipboardTooltip : copyToClipboardTooltip(setCodeCopied, code)}
        </div>
      </div>
    </div>
  )
}
