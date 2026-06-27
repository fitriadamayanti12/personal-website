'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWA() {
  const phoneNumber = '6281372822252';
  const message = encodeURIComponent('Halo Kak Fitria, saya tertarik dengan portfolio Anda!');
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 w-12 h-12 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="absolute right-full mr-3 text-sm font-medium bg-white text-gray-800 px-3 py-1.5 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Chat via WA
      </span>
    </a>
  );
}