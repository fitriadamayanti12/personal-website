'use client'

import { createPost } from '@/app/actions/posts'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { 
  Save, 
  X, 
  Eye, 
  Edit3, 
  Image as ImageIcon, 
  Globe, 
  Lock,
  AlertCircle,
  CheckCircle,
  Loader2,
  ArrowLeft,
  HelpCircle
} from 'lucide-react'

export default function CreatePostPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [previewMode, setPreviewMode] = useState(false)
  const [slugPreview, setSlugPreview] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  
  const [form, setForm] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    cover_image: '',
    published: false,
  })

  // Generate slug preview from title
  useEffect(() => {
    if (!form.slug && form.title) {
      const generatedSlug = form.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      setSlugPreview(generatedSlug)
    } else {
      setSlugPreview(form.slug)
    }
  }, [form.title, form.slug])

  // Count characters and words
  useEffect(() => {
    setCharCount(form.content.length)
    const words = form.content.trim().split(/\s+/).filter(w => w.length > 0).length
    setWordCount(words)
  }, [form.content])

  const generateSlug = () => {
    const generated = form.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
    setForm({ ...form, slug: generated })
  }

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    
    const result = await createPost(formData)
    
    if (result?.error) {
      setError(result.error)
      setLoading(false)
    } else if (result?.success) {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Create New Post
              </h1>
              <p className="text-gray-500 mt-1">Write something amazing for your readers</p>
            </div>
            
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setPreviewMode(!previewMode)}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {previewMode ? <Edit3 className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {previewMode ? 'Edit' : 'Preview'}
              </button>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>{error}</p>
          </div>
        )}

        <form action={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
              {previewMode ? (
                // Preview Mode
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-900">Live Preview</h2>
                  </div>
                  <div className="p-8">
                    {form.cover_image && (
                      <div className="mb-6 rounded-xl overflow-hidden">
                        <img src={form.cover_image} alt="Cover" className="w-full h-64 object-cover" />
                      </div>
                    )}
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{form.title || 'Untitled Post'}</h1>
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: form.content }} />
                  </div>
                </div>
              ) : (
                // Edit Mode
                <>
                  {/* Title */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <label className="block font-semibold text-gray-900 mb-2">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      disabled={loading}
                      placeholder="Enter post title..."
                      className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 transition-all"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      {60 - form.title.length} characters remaining
                    </p>
                  </div>

                  {/* Slug */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <label className="block font-semibold text-gray-900 mb-2">
                      URL Slug
                    </label>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <Globe className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            name="slug"
                            value={form.slug}
                            onChange={(e) => setForm({ ...form, slug: e.target.value })}
                            placeholder="auto-generated"
                            disabled={loading}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={generateSlug}
                        disabled={!form.title || loading}
                        className="px-4 py-2 text-sm text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors disabled:opacity-50"
                      >
                        Generate
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      yourdomain.com/blog/{slugPreview || '...'}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                      <label className="font-semibold text-gray-900">
                        Content <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>{wordCount} words</span>
                        <span>{charCount} characters</span>
                      </div>
                    </div>
                    <textarea
                      name="content"
                      required
                      rows={20}
                      value={form.content}
                      onChange={(e) => setForm({ ...form, content: e.target.value })}
                      disabled={loading}
                      className="w-full p-6 font-mono text-sm border-0 focus:ring-0 focus:outline-none disabled:bg-gray-50 resize-y"
                      placeholder="Write your post content here... (supports HTML/Markdown)

# Heading 1
## Heading 2

**Bold text** and *italic text*

- Lists
- Are supported

You can also use HTML tags like <p>, <div>, etc."
                    />
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Publish Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Publishing
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      {form.published ? (
                        <>
                          <Globe className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-900">Published</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm font-medium text-gray-900">Draft</span>
                        </>
                      )}
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="published"
                        value="true"
                        checked={form.published}
                        onChange={(e) => setForm({ ...form, published: e.target.checked })}
                        disabled={loading}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="space-y-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 flex items-center justify-center gap-2 font-medium"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          {form.published ? 'Publish Post' : 'Save Draft'}
                        </>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => router.push('/admin')}
                      disabled={loading}
                      className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 font-medium"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>

              {/* Cover Image Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Cover Image
                </h2>
                
                <div className="space-y-4">
                  <input
                    type="url"
                    name="cover_image"
                    value={form.cover_image}
                    onChange={(e) => setForm({ ...form, cover_image: e.target.value })}
                    disabled={loading}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  {form.cover_image && (
                    <div className="rounded-xl overflow-hidden border border-gray-200">
                      <img src={form.cover_image} alt="Cover preview" className="w-full h-40 object-cover" />
                      <div className="p-2 bg-gray-50 text-center">
                        <p className="text-xs text-green-600 flex items-center justify-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Preview loaded
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-700">
                        Recommended: 1200x630px for optimal display on social media
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Excerpt Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="font-semibold text-gray-900 mb-4">Excerpt</h2>
                <textarea
                  name="excerpt"
                  rows={4}
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="A short summary of your post (optional)..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  {160 - form.excerpt.length} characters remaining
                </p>
              </div>

              {/* Writing Tips Card */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-2">✨ Writing Tips</h3>
                <ul className="text-sm space-y-2 text-purple-100">
                  <li>• Use headings to structure your content</li>
                  <li>• Add images to increase engagement</li>
                  <li>• Keep paragraphs short for better readability</li>
                  <li>• Preview before publishing</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}