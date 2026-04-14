'use client'

import { useState } from 'react'
import { X, ExternalLink } from 'lucide-react'

export default function BlogPreview() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-300 hover:text-white flex items-center gap-1"
      >
        Preview Blog
        <ExternalLink className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-semibold">Blog Preview</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe 
              src="/blog" 
              className="flex-1 rounded-b-2xl"
              title="Blog Preview"
            />
          </div>
        </div>
      )}
    </>
  )
}