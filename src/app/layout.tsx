import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWA from '@/components/FloatingWA'; // ← ADA?

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fitria Damayanti | Software Engineer',
  description: 'S2 IT UGM graduate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWA /> {/* ← ADA? */}
      </body>
    </html>
  );
}