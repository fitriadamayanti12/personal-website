import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, Heart, Share2 } from 'lucide-react'

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

export default async function BlogPage() {
  const supabase = await createClient()
  
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Blog</h1>
            <p className="text-red-600">Error loading posts. Please try again later.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Thoughts & Insights
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stories, insights, and lessons from my journey in tech
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {posts && posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts yet</h3>
              <p className="text-gray-500">Check back soon for new content!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts?.map((post, index) => (
                <article 
                  key={post.id} 
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Cover Image */}
                  {post.cover_image && (
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${post.cover_image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full shadow-md">
                          Article
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{getReadingTime(post.content)} min read</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {/* Read More Link */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-300"
                      >
                        <span>Read article</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      
                      {/* Engagement Buttons */}
                      <div className="flex items-center gap-3 text-gray-400">
                        <button className="hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                        <button className="hover:text-blue-500 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Newsletter Section */}
            <div className="mt-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white text-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
                  
                  <div className="relative z-10">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 text-white/80" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h3>
                    <p className="text-blue-100 mb-6 max-w-md mx-auto">
                      Get notified when I publish new articles and insights
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-xs text-blue-200 mt-4">
                      No spam, unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          article {
            opacity: 0;
            animation: fade-in-up 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  )
}