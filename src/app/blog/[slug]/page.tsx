import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline inline-flex items-center gap-1 mb-8"
      >
        ← Back to all posts
      </Link>

      <article>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-8">
          {formatDate(post.created_at)}
        </p>
        <div className="prose prose-gray max-w-none">
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}