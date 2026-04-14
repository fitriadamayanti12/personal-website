'use client'

import { Share2, Bookmark } from 'lucide-react'
import { useState } from 'react'

interface BlogActionsProps {
  title: string
  url: string
}

export default function BlogActions({ title, url }: BlogActionsProps) {
  const [bookmarked, setBookmarked] = useState(false)

  const handleShare = async () => {
    const fullUrl = `${window.location.origin}${url}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: fullUrl,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(fullUrl)
        alert('Link copied to clipboard!')
      } catch (err) {
        console.log('Error copying:', err)
      }
    }
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
    // Save to localStorage or your backend here
    if (!bookmarked) {
      // Save bookmark logic
      console.log('Bookmarked:', title)
    } else {
      // Remove bookmark logic
      console.log('Removed bookmark:', title)
    }
  }

  return (
    <div className="flex gap-2">
      <button 
        onClick={handleShare}
        className="p-2 text-gray-400 hover:text-gray-600 transition rounded-lg hover:bg-gray-100"
        aria-label="Share post"
      >
        <Share2 className="w-4 h-4" />
      </button>
      <button 
        onClick={handleBookmark}
        className={`p-2 transition rounded-lg hover:bg-gray-100 ${
          bookmarked ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
        }`}
        aria-label="Bookmark post"
      >
        <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
      </button>
    </div>
  )
}