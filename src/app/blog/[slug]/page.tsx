import { notFound } from 'next/navigation';
import Link from 'next/link';

// Data blog (sementara)
const blogPosts = {
  'aku-pilih-ibu': {
    title: 'Aku Pilih Ibu di Atas Karir',
    date: '2026-03-15',
    content: `
      <p>Setelah lulus S2 dari UGM, aku dihadapkan pada pilihan yang sulit...</p>
      <p>Banyak yang bilang aku membuang-buang waktu. Tapi aku memilih pulang, merawat ibu yang sakit.</p>
      <p>Dan aku tidak pernah menyesal.</p>
    `,
  },
  'belajar-nextjs-ramadan': {
    title: 'Belajar Next.js dan TypeScript di Bulan Ramadan',
    date: '2026-03-20',
    content: `
      <p>Ramadan tahun ini aku manfaatkan untuk belajar hal baru...</p>
      <p>Next.js dengan TypeScript menjadi pilihanku...</p>
    `,
  },
  'tips-digital-parenting': {
    title: 'Tips Digital Parenting untuk Orang Tua',
    date: '2026-03-25',
    content: `
      <p>Gadget bukan musuh, tapi perlu dikelola...</p>
      <p>Berikut 3 tips sederhana yang bisa dicoba...</p>
    `,
  },
};

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
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
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
          {formatDate(post.date)}
        </p>
        <div
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}