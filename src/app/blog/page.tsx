import { supabase } from '@/lib/supabase';
import Link from 'next/link';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
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
      <main className="max-w-2xl mx-auto px-4 py-16">
        <p className="text-red-600">Error: {error.message}</p>
      </main>
    );
  }

console.log('Posts count:', posts?.length); // Tambahkan ini
  console.log('First post:', posts?.[0]);     // Tambahkan ini

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600">
          Catatan perjalanan, pembelajaran, dan refleksi.
        </p>
      </div>

      <div className="space-y-8">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mb-3">
                {formatDate(post.created_at)}
              </p>
              <p className="text-gray-700 mb-4">
                {post.excerpt || post.content.substring(0, 150)}...
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Belum ada artikel. Nanti akan diupdate ya.</p>
          </div>
        )}
      </div>
    </main>
  );
}