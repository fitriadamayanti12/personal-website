'use client'

import { deletePost } from '@/app/actions/posts'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'
import ConfirmModal from './ConfirmModal'
import Toast from './Toast'

export default function DeleteButton({ postId }: { postId: number }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  async function handleDelete() {
    setLoading(true)
    
    try {
      const result = await deletePost(postId)
      if (result?.error) {
        setToast({ message: result.error, type: 'error' })
      } else if (result?.success) {
        setToast({ message: 'Post deleted successfully!', type: 'success' })
        router.refresh()
      }
    } catch (err) {
      setToast({ message: 'An unexpected error occurred', type: 'error' })
    } finally {
      setLoading(false)
      setShowModal(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
      >
        <Trash2 className="w-3.5 h-3.5" />
        Delete
      </button>

      <ConfirmModal
        isOpen={showModal}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setShowModal(false)}
        loading={loading}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}