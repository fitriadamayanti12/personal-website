import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, User, Tag, Heart, Share2, Bookmark, Sparkles, ChevronRight } from 'lucide-react'
import BlogActions from '@/components/BlogActions'

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section dengan Efek Modern */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 py-20 md:py-28">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300 mb-8 w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              <Sparkles className="w-3 h-3" />
              {post.category || 'Article'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span>Fitria Damayanti</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.created_at)}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {getReadingTime(post.content)} min read
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          {/* Cover Image */}
          {post.cover_image && (
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-100">
              <img 
                src={post.cover_image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}
          
          <div className="p-6 md:p-10 lg:p-12">
            {/* Article Header with Meta */}
            <div className="mb-8 pb-6 border-b border-gray-100">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      FD
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Fitria Damayanti</p>
                      <p className="text-xs text-gray-500">Software Developer & Security Specialist</p>
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>0</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bookmark className="w-4 h-4" />
                    <span>Save</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg prose-blue max-w-none
                prose-headings:text-gray-800 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
                prose-strong:text-gray-800 prose-strong:font-semibold
                prose-li:text-gray-600 prose-li:mb-1
                prose-ul:my-4 prose-ol:my-4
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg
                prose-img:rounded-lg prose-img:shadow-md
                prose-table:border-collapse prose-th:border prose-th:border-gray-200 prose-th:p-2 prose-th:bg-gray-50
                prose-td:border prose-td:border-gray-200 prose-td:p-2
                first:prose-p:mt-0 last:prose-p:mb-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Section */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-3">
                <Tag className="w-4 h-4 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {post.tags ? (
                    post.tags.split(',').map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{tag.trim()}
                      </span>
                    ))
                  ) : (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      #technology
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Divider with Client Component */}
            <div className="my-8 pt-6 border-t border-gray-100">
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
        </div>

        {/* Author Section - Enhanced */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              FD
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Fitria Damayanti</h3>
              <p className="text-blue-600 font-medium mb-3">Software Developer & Security Specialist</p>
              <p className="text-gray-600 leading-relaxed">
                Full-Stack Developer & Security Engineer with 5+ years of experience. 
                Passionate about building secure applications, teaching technology, 
                and creating social impact through education.
              </p>
              <div className="flex gap-3 mt-4 justify-center md:justify-start">
                <a
                  href="https://github.com/fitriadamayanti12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/fitria-damayanti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-600 rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All posts
          </Link>
          
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
          >
            Back to Home
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Related Posts Section (Optional) */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Continue Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5 border border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Coming soon</p>
              <p className="text-gray-600">More articles will be published here</p>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5 border border-gray-100">
              <p className="text-xs text-gray-500 mb-2">Stay tuned</p>
              <p className="text-gray-600">Subscribe to get notified about new posts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}