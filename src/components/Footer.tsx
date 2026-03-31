import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Fitria Damayanti. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/fitria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/fitria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <Link
              href="/blog"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Pesan Inspiratif */}
        <p className="text-center text-gray-400 text-xs mt-4">
          Choosing family over career is not a step back — it's a foundation.
        </p>
      </div>
    </footer>
  );
}