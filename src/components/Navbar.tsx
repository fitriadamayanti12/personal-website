'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Home, User, Briefcase, FolderGit2, BookOpen, ChevronRight, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Experience', path: '/experience', icon: Briefcase },
  { name: 'Projects', path: '/projects', icon: FolderGit2 },
  { name: 'Blog', path: '/blog', icon: BookOpen },
   { name: 'Contact', path: '/contact', icon: Mail },  
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg border-b border-gray-100' 
          : 'bg-white/95 border-b border-gray-100'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo dengan Animasi */}
            <Link 
              href="/" 
              className="group relative flex items-center gap-2 overflow-hidden"
            >
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <Sparkles className="w-6 h-6 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-all duration-300">
                  Fitria Damayanti
                </span>
              </div>
            </Link>

            {/* Desktop Menu dengan Indikator Aktif */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative group px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'text-blue-600 font-semibold bg-blue-50' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'
                      }`} />
                      <span>{item.name}</span>
                    </div>
                    
                    {/* Active Indicator - Bottom Line */}
                    {isActive && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-blue-100 transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu dengan Animasi Slide */}
        <div className={`md:hidden absolute w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-100 shadow-xl">
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.path;
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`group relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      style={{
                        animationDelay: `${idx * 50}ms`,
                        animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={isActive ? 'text-white' : ''}>{item.name}</span>
                      </div>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 text-white" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/fitriadamayanti12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/fitria-damayanti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20"></div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}