'use client';

import Link from 'next/link';
import { Heart, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {currentYear} Fitria Damayanti. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {/* GitHub SVG */}
            <a
              href="https://github.com/fitriadamayanti12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 transition"
              aria-label="GitHub"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.8 1.65-.12.6-.1 1.22.05 1.8-.01.01-.01.03-.02.05 0 2 0 4 0 4" />
              </svg>
            </a>
            
            {/* LinkedIn SVG */}
            <a
              href="https://www.linkedin.com/in/fitria-damayanti-8a484b139/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            
            {/* Email SVG */}
            <a
              href="mailto:fitria.damayanti@example.com"
              className="text-gray-400 hover:text-red-500 transition"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            {/* Blog Link */}
            <Link
              href="/blog"
              className="text-sm text-gray-400 hover:text-gray-700 transition"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Inspirational Message */}
        <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
          Choosing family over career is not a step back — it's a foundation.
          <Heart className="w-3 h-3 text-red-400 ml-1" />
        </p>
      </div>
    </footer>
  );
}