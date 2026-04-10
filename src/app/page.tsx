'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Code, Shield, Heart, BookOpen, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open for opportunities
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Fitria Damayanti
              </span>
            </h1>

            <p className="text-xl text-gray-500 mb-3">
              Software Developer & Security Specialist
            </p>

            <p className="text-base text-gray-400 mb-6">
              M.Eng in Information Technology | UGM
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              I've built software and secured systems. But my biggest dream?
              A reading house in my village and scholarships for children who deserve a chance.
              Because the most important code I can write is the one that opens doors for others.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-md"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                About Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              {/* GitHub */}
              <a
                href="https://github.com/fitriadamayanti12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-900 transition"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/fitria-damayanti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
              <a
                href="mailto:fitria.damayanti@example.com"
                className="p-2 text-gray-400 hover:text-red-500 transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full ring-4 ring-white shadow-xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/profile.jpg"
                  alt="Fitria Damayanti"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 border-t border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">What I Do</h2>
          <p className="text-gray-500">Combining technical expertise with a passion for social impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Software Development</h3>
            <p className="text-sm text-gray-500">Full-stack development with React, Next.js, TypeScript, and Node.js</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Security Engineering</h3>
            <p className="text-sm text-gray-500">Blue team experience, secure coding practices, and vulnerability assessment</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Tech Education</h3>
            <p className="text-sm text-gray-500">Teaching programming and cybersecurity to aspiring developers</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Social Impact</h3>
            <p className="text-sm text-gray-500">Building community library and scholarship programs for children</p>
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="max-w-5xl mx-auto px-4 py-16 border-t border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Featured Projects</h2>
            <p className="text-gray-500">Some of my recent work</p>
          </div>
          <Link href="/projects" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1">
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Health Tracker</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Aplikasi pencatat kesehatan untuk memantau gula darah, tekanan darah, dan gejala harian.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">TypeScript</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Supabase</span>
            </div>
            <Link href="/projects" className="text-sm text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">PagePulse</h3>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Reading tracker with timer, goals, achievements, and book discussion forum.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Next.js</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">TypeScript</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Tailwind</span>
            </div>
            <Link href="/projects" className="text-sm text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Let's Work Together</h2>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Interested in collaborating or have a project in mind? Feel free to reach out!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}