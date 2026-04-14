import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { logout } from '@/app/actions/auth'
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  LogOut,
  Globe
} from 'lucide-react'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // JANGAN redirect di sini! Biarkan page yang handle
  // Tapi kita tetap render layout dengan atau tanpa user

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Hanya tampil jika user login */}
      {user && (
        <>
          <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 left-0 z-30">
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Admin Panel
              </h1>
              <p className="text-xs text-gray-500 mt-1">Welcome back, {user.email?.split('@')[0]}</p>
            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              <Link
                href="/admin"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </Link>

              <Link
                href="/admin/create"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <PlusCircle className="w-5 h-5" />
                <span className="font-medium">Create Post</span>
              </Link>

              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">View Blog</span>
                </Link>
              </div>
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-200">
              <form action={logout}>
                <button
                  type="submit"
                  className="flex items-center gap-3 px-4 py-3 w-full text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </form>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 ml-64">
            <div className="p-8">
              {children}
            </div>
          </main>
        </>
      )}

      {/* Jika tidak ada user, render children (halaman login) tanpa sidebar */}
      {!user && (
        <main className="flex-1">
          {children}
        </main>
      )}
    </div>
  )
}