'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Cek apakah sedang di halaman admin
  const isAdminRoute = pathname?.startsWith('/admin');
  
  return (
    <>
      {/* Navbar - Hanya tampil jika BUKAN di route admin */}
      {!isAdminRoute && <Navbar />}
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer - Hanya tampil jika BUKAN di route admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
}