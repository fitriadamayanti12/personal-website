import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { deletePost } from '@/app/actions/posts'
import DeleteButton from '@/components/DeleteButton'

export default async function AdminPostsPage() {
  const supabase = await createClient()
  
  // Check authentication
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <Link href="/admin/login" className="text-blue-600 hover:underline">
          Please login first
        </Link>
      </div>
    )
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Posts</h1>
        <Link 
          href="/admin/posts/create" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Post
        </Link>
      </div>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Slug</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Created</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post) => (
              <tr key={post.id} className="border-t">
                <td className="p-3">{post.title}</td>
                <td className="p-3 text-sm text-gray-600">{post.slug}</td>
                <td className="p-3">
                  {post.published ? (
                    <span className="text-green-600">✓ Published</span>
                  ) : (
                    <span className="text-yellow-600">Draft</span>
                  )}
                </td>
                <td className="p-3 text-sm">
                  {new Date(post.created_at).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <DeleteButton postId={post.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}