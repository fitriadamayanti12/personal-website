import Link from 'next/link';

// Data blog sementara (nanti bisa dipindah ke lib/blog.ts)
const blogPosts = [
  {
    id: '1',
    title: 'Aku Pilih Ibu di Atas Karir',
    excerpt: 'Bukan karena gagal di kota, tapi karena waktu bersama ibu tidak bisa diulang.',
    date: '2026-03-15',
    slug: 'aku-pilih-ibu',
  },
  {
    id: '2',
    title: 'Belajar Next.js dan TypeScript di Bulan Ramadan',
    excerpt: 'Menemukan keseimbangan antara ibadah, belajar, dan merawat keluarga.',
    date: '2026-03-20',
    slug: 'belajar-nextjs-ramadan',
  },
  {
    id: '3',
    title: 'Tips Digital Parenting untuk Orang Tua',
    excerpt: 'Cara sederhana mengelola gadget anak tanpa drama.',
    date: '2026-03-25',
    slug: 'tips-digital-parenting',
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600">
          Catatan perjalanan, pembelajaran, dan refleksi.
        </p>
      </div>

      {/* Daftar Artikel */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-200 pb-8 last:border-0"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm mb-3">
              {formatDate(post.date)}
            </p>
            <p className="text-gray-700 mb-4">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {/* Pesan jika belum ada artikel */}
      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Belum ada artikel. Nanti akan diupdate ya.</p>
        </div>
      )}
    </main>
  );
}