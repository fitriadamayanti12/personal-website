'use client';

import Link from 'next/link';
import { Heart, Mail, Sparkles, ArrowUp, Coffee, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white border-t border-white/10 overflow-hidden">
      
      {/* Subtle background particles */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute w-1 h-1 rounded-full bg-purple-300/50" style={{ left: '10%', top: '20%', animation: 'footerFloat 8s ease-in-out 0s infinite' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-300/50" style={{ left: '30%', top: '60%', animation: 'footerFloat 7s ease-in-out 2s infinite' }} />
        <div className="absolute w-1 h-1 rounded-full bg-pink-300/40" style={{ left: '50%', top: '30%', animation: 'footerFloat 9s ease-in-out 4s infinite' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-300/40" style={{ left: '70%', top: '70%', animation: 'footerFloat 8s ease-in-out 1s infinite' }} />
        <div className="absolute w-1 h-1 rounded-full bg-indigo-300/40" style={{ left: '85%', top: '15%', animation: 'footerFloat 10s ease-in-out 3s infinite' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-300/30" style={{ left: '20%', top: '85%', animation: 'footerFloat 7s ease-in-out 5s infinite' }} />
        <div className="absolute w-1 h-1 rounded-full bg-amber-300/30" style={{ left: '60%', top: '10%', animation: 'footerFloat 9s ease-in-out 2.5s infinite' }} />
        <div className="absolute w-1 h-1 rounded-full bg-rose-300/30" style={{ left: '90%', top: '50%', animation: 'footerFloat 8s ease-in-out 6s infinite' }} />
      </div>

      <style jsx>{`
        @keyframes footerFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(15px, -20px) scale(1.5); opacity: 0.8; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-14 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Fitria Damayanti
              </h3>
            </div>
            <p className="text-purple-200/80 text-sm leading-relaxed mb-4">
              Building software, securing systems, dan menciptakan peluang untuk generasi mendatang.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/fitriadamayanti12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white/80 hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-white/10"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/fitria-damayanti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white/80 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-white/10"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="mailto:fitria.damayanti.996@gmail.com"
                className="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl text-white/80 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-white/10"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wide">Jelajahi</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang', href: '/about' },
                { label: 'Pengalaman', href: '/experience' },
                { label: 'Proyek', href: '/projects' },
                { label: 'Blog', href: '/blog' },
                { label: 'Kontak', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-purple-200/70 hover:text-white text-sm transition-all duration-300 flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wide">Sumber Daya</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://github.com/fitriadamayanti12" target="_blank" rel="noopener noreferrer" className="text-purple-200/70 hover:text-white text-sm transition-colors duration-300">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-purple-200/70 hover:text-white text-sm transition-colors duration-300">
                  Artikel Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-purple-200/70 hover:text-white text-sm transition-colors duration-300">
                  Portfolio Proyek
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-200/70 hover:text-white text-sm transition-colors duration-300">
                  Hubungi Saya
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm tracking-wide">Mari Terhubung</h4>
            <p className="text-purple-200/70 text-sm mb-5 leading-relaxed">
              Punya proyek, ide kolaborasi, atau ingin berdiskusi?
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/20 hover:border-white/20 transition-all duration-300"
            >
              <span>Mulai Percakapan</span>
              <ArrowUp className="w-3.5 h-3.5 rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">
              <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-purple-200/60">
            © {currentYear} Fitria Damayanti. Dibuat dengan{' '}
            <Heart className="w-3.5 h-3.5 text-pink-400 inline-block animate-pulse" /> untuk dampak yang lebih baik
          </p>
          
          <div className="flex items-center gap-2 text-purple-200/60 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
            <Coffee className="w-4 h-4" />
            <p className="text-xs">
              Memilih keluarga bukanlah langkah mundur — melainkan fondasi.
            </p>
          </div>
          
          <div className="flex gap-1.5">
            {['Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
              <span key={tech} className="text-[10px] px-2.5 py-1 bg-white/5 backdrop-blur-sm rounded-full text-purple-200/60 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default border border-white/5">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-white/20 hover:scale-110 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Kembali ke atas"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}