import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import BlogActions from '@/components/BlogActions'  // Import client component

export const dynamic = 'force-dynamic'

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s/g).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  // Fetch published post by slug
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.created_at)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {getReadingTime(post.content)} min read
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
          {/* Category / Tag */}
          <div className="mb-6">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {post.category || 'Article'}
            </span>
          </div>

          {/* Cover Image */}
          {post.cover_image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.cover_image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-blue max-w-none
              prose-headings:text-gray-800 prose-headings:font-bold
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-800
              prose-li:text-gray-600
              prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-600
              prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Divider with Client Component */}
          <div className="my-8 pt-6 border-t">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                Published on {formatDate(post.created_at)}
              </p>
              <BlogActions 
                title={post.title} 
                url={`/blog/${post.slug}`}
              />
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-8 bg-gray-50 rounded-xl border p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
              FD
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Fitria Damayanti</h3>
              <p className="text-sm text-gray-500 mb-3">
                Software Developer & Security Specialist
              </p>
              <p className="text-sm text-gray-600">
                Passionate about building secure applications and creating social impact through technology.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>
        </div>
      </div>
    </div>
  )
}