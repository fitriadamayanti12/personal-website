'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWA from '@/components/FloatingWA';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  
  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingWA />}
    </>
  );
}