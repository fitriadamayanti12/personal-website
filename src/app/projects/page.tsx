'use client';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { Code, Star, ExternalLink, Sparkles, Layers, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  
  // Filter logic
  const filteredProjects = filter === 'all' 
    ? otherProjects 
    : featuredProjects;

  // Stats
  const totalProjects = projects.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section dengan Efek Modern */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            My Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Building solutions that matter — from healthcare tracking to digital parenting platforms
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">{totalProjects}+</div>
              <div className="text-sm text-blue-100">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{featuredProjects.length}</div>
              <div className="text-sm text-blue-100">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-blue-100">Production Ready</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              filter === 'featured'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Star className="w-4 h-4" />
            Featured Only
          </button>
        </div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && filter === 'all' && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
                <p className="text-gray-500 mt-1">My best work and most impactful solutions</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="transform transition-all duration-500 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {filter === 'all' ? 'All Projects' : 'Featured Projects'}
              </h2>
              <p className="text-gray-500 mt-1">Explore my complete portfolio</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(filter === 'all' ? otherProjects : featuredProjects).map((project, index) => (
              <div
                key={project.id}
                className="transform transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in-up 0.6s ease-out forwards'
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {(filter === 'featured' && featuredProjects.length === 0) && (
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
                <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No featured projects</h3>
                <p className="text-gray-500">Check back soon for featured projects</p>
                <button
                  onClick={() => setFilter('all')}
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View all projects
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* GitHub Callout with Enhanced Design */}
        <div className="mt-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 text-white text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.8 1.65-.12.6-.1 1.22.05 1.8-.01.01-.01.03-.02.05 0 2 0 4 0 4" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Explore More on GitHub</h3>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                  Check out my complete portfolio, open-source contributions, and code repositories
                </p>
                <a
                  href="https://github.com/fitriadamayanti12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Visit GitHub Profile
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          section .grid > div {
            opacity: 0;
            animation: fade-in-up 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}