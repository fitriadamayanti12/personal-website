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
  
  const isAdminRoute = pathname?.startsWith('/admin');
  
  console.log('LayoutWrapper rendered, isAdminRoute:', isAdminRoute); // ← TAMBAHKAN INI
  console.log('Current pathname:', pathname); // ← TAMBAHKAN INI
  
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}