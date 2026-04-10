import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s/g).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export default async function BlogPage() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error:', error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-red-600">Failed to load posts. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Thoughts on technology, cybersecurity, digital parenting, and my journey
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post, index) => (
              <article 
                key={post.id} 
                className={`bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow ${
                  index === 0 ? 'lg:flex lg:gap-6' : ''
                }`}
              >
                {index === 0 && (
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">📖</div>
                      <p className="text-sm text-gray-500">Featured Article</p>
                    </div>
                  </div>
                )}
                <div className={`p-6 ${index === 0 ? 'lg:w-2/3' : ''}`}>
                  {/* Category / Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {post.category || 'Article'}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className={`font-bold text-gray-800 hover:text-blue-600 transition mb-3 ${
                      index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                    }`}>
                      {post.title}
                    </h2>
                  </Link>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.created_at)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {getReadingTime(post.content)} min read
                    </span>
                  </div>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt || post.content.substring(0, 200)}...
                  </p>
                  
                  {/* Read more link */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No articles yet</h2>
            <p className="text-gray-500">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </div>
  );
}