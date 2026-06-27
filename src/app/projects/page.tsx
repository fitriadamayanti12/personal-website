'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Star, Sparkles, ExternalLink, ArrowRight, Eye, Globe, Clock, Zap, Heart } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'Next Generation Bimbel',
    subtitle: 'Bimbingan Belajar & Pengembangan Skill',
    description: 'Platform bimbingan belajar modern dengan metode asyik dan personal. Menyediakan bimbel reguler, kelas programming, bahasa Inggris, digital parenting, aplikasi gamifikasi, dan ebook digital.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    gradient: 'from-violet-500 to-purple-600',
    color1: '#7c3aed',
    color2: '#a855f7',
    featured: true,
    live: 'https://next-generation-bimbel.vercel.app',
    github: 'https://github.com/fitriadamayanti12/next-generation-bimbel',
    isPrivate: false,
    icon: '🎓',
  },
  {
    id: '2',
    title: 'Questify',
    subtitle: 'Productivity Platform',
    description: 'Aplikasi produktivitas all-in-one untuk tracking goals harian, habits, dan daily tasks. Dilengkapi dashboard progress, streak tracking, dan reminder.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    gradient: 'from-sky-500 to-blue-600',
    color1: '#0284c7',
    color2: '#2563eb',
    featured: true,
    live: 'https://questify-productivity.netlify.app',
    github: '',
    isPrivate: true,
    icon: '🎯',
  },
  {
    id: '3',
    title: 'Level Up Your Sen',
    subtitle: 'Gamified Savings Platform',
    description: 'Platform tabungan gamifikasi dengan Main Quest (target & hadiah impian), Mystery Box, Hall of Crowns, analitik cerdas (CSV/PDF), AI Advisor, Simulator, streak & badge, serta leaderboard.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'AI'],
    gradient: 'from-amber-500 to-orange-600',
    color1: '#d97706',
    color2: '#ea580c',
    featured: true,
    live: 'https://level-up-your-sen.netlify.app',
    github: '',
    isPrivate: true,
    icon: '🚀',
  },
  {
    id: '4',
    title: 'PagePulse',
    subtitle: 'Reading Ecosystem',
    description: 'Reading tracker lengkap dengan timer baca, target bulanan, statistik, prestasi, review buku, dan forum diskusi komunitas pembaca.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    gradient: 'from-emerald-500 to-teal-500',
    color1: '#059669',
    color2: '#14b8a6',
    featured: true,
    live: 'https://pagepulse-chi.vercel.app',
    github: 'https://github.com/fitriadamayanti12/pagepulse',
    isPrivate: false,
    icon: '📚',
  },
  {
    id: '5',
    title: 'TitikKoma',
    subtitle: 'English Course & Translation',
    description: 'Platform kursus bahasa Inggris dan jasa terjemahan profesional. Menyediakan kelas Speaking, Grammar, English for Beginner, serta layanan terjemahan dokumen resmi & non-resmi.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'from-cyan-500 to-blue-600',
    color1: '#0891b2',
    color2: '#2563eb',
    featured: true,
    live: 'https://titikkoma-hazel.vercel.app',
    github: '',
    isPrivate: true,
    icon: '📝',
  },
  {
    id: '6',
    title: 'Security Playground',
    subtitle: 'Cybersecurity Lab',
    description: 'Platform edukasi keamanan web interaktif dengan simulasi XSS, SQL Injection, dashboard OWASP, security checklist + PDF report, dan dark mode.',
    tags: ['Nuxt 4', 'TypeScript', 'Tailwind', 'Supabase'],
    gradient: 'from-indigo-500 to-blue-500',
    color1: '#4f46e5',
    color2: '#3b82f6',
    featured: true,
    live: 'https://security-playground-five.vercel.app',
    github: 'https://github.com/fitriadamayanti12/security-playground',
    isPrivate: false,
    icon: '🛡️',
  },
  {
    id: '7',
    title: 'Math Quest Arena',
    subtitle: 'RPG Math Game',
    description: 'Game edukasi matematika berbasis RPG untuk anak SD-SMP dengan mode Battle, Adventure, Daily Challenge, Leaderboard ELO, dan Shop system.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'Supabase'],
    gradient: 'from-blue-500 to-cyan-500',
    color1: '#2563eb',
    color2: '#06b6d4',
    featured: true,
    live: 'https://math-quest-arena-topaz.vercel.app',
    github: 'https://github.com/fitriadamayanti12/math-quest-arena',
    isPrivate: false,
    icon: '⚔️',
  },
  {
    id: '8',
    title: 'Kid Arcade',
    subtitle: 'Educational Games',
    description: 'Platform game edukasi untuk anak usia 6+ dengan 7 game seru, sistem reward, leaderboard, dan AI Game Generator.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    gradient: 'from-rose-500 to-pink-500',
    color1: '#e11d48',
    color2: '#ec4899',
    featured: true,
    live: 'https://kid-arcade.vercel.app',
    github: 'https://github.com/fitriadamayanti12/kid-arcade',
    isPrivate: false,
    icon: '🎮',
  },
  {
    id: '9',
    title: 'Health Tracker',
    subtitle: 'Healthcare App • Under Refinement',
    description: 'Aplikasi pencatat kesehatan komprehensif untuk memantau gula darah, tekanan darah, dan gejala harian dengan grafik tren dan export PDF.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    gradient: 'from-red-500 to-rose-600',
    color1: '#dc2626',
    color2: '#f43f5e',
    featured: false,
    live: 'https://health-tracker-eta-two.vercel.app',
    github: 'https://github.com/fitriadamayanti12/health-tracker',
    isPrivate: false,
    icon: '💊',
  },
  {
    id: '10',
    title: 'AI StoryForge',
    subtitle: 'AI Storytelling Platform • Coming Soon',
    description: 'Platform storytelling interaktif berbasis AI untuk anak-anak. Dilengkapi AI Story Generator, Text-to-Speech, ilustrasi otomatis, gamification, dan parent dashboard.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'Supabase', 'AI'],
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    color1: '#7c3aed',
    color2: '#ec4899',
    featured: true,
    live: '#',
    github: '',
    isPrivate: true,
    isComingSoon: true,
    icon: '🤖',
  },
  {
    id: '11',
    title: 'Digital Parenting',
    subtitle: 'Parental Control App • Coming Soon',
    description: 'Platform edukasi dan kontrol orang tua untuk mengelola penggunaan gadget anak. Dilengkapi screen time management, content filtering, dan tips parenting berbasis AI.',
    tags: ['Next.js', 'TypeScript', 'AI', 'Supabase'],
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    color1: '#0284c7',
    color2: '#4f46e5',
    featured: true,
    live: '#',
    github: '',
    isPrivate: true,
    isComingSoon: true,
    icon: '👨‍👩‍👧‍👦',
  },
];

const getThumbnail = (url: string) => {
  if (url === '#') return '';
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`;
};

const GitHubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function Projects() {
  const [tab, setTab] = useState<'all' | 'featured' | 'coming-soon'>('all');
  const [techFilter, setTechFilter] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [scrollReveal, setScrollReveal] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const liveProjects = projects.filter(p => !p.isComingSoon);
  const featuredProjects = projects.filter(p => p.featured && !p.isComingSoon);
  const comingSoonProjects = projects.filter(p => p.isComingSoon);

  const tabFiltered = tab === 'all' 
    ? liveProjects 
    : tab === 'featured' 
      ? featuredProjects 
      : comingSoonProjects;
  
  const filteredProjects = techFilter 
    ? tabFiltered.filter(p => p.tags.includes(techFilter))
    : tabFiltered;

  const availableTechs = [...new Set(tabFiltered.flatMap(p => p.tags))].sort();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollReveal((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    const refs = sectionRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    setTechFilter(null);
  }, [tab]);

  const isRevealed = (id: string) => scrollReveal.has(id);
  const handleImageError = (id: string) => {
    setImageErrors((prev) => new Set([...prev, id]));
  };

  const getTagColor = (tag: string) => {
    const colorMap: Record<string, string> = {
      'Next.js': 'bg-sky-100 text-sky-700',
      'Next.js 15': 'bg-sky-100 text-sky-700',
      'TypeScript': 'bg-blue-100 text-blue-700',
      'Tailwind': 'bg-teal-100 text-teal-700',
      'Tailwind CSS': 'bg-teal-100 text-teal-700',
      'Supabase': 'bg-emerald-100 text-emerald-700',
      'React': 'bg-cyan-100 text-cyan-700',
      'Nuxt 4': 'bg-green-100 text-green-700',
      'OpenAI': 'bg-purple-100 text-purple-700',
      'AI': 'bg-pink-100 text-pink-700',
    };

    if (techFilter === tag) {
      return 'bg-pink-200 text-pink-700 ring-2 ring-pink-300';
    }

    return colorMap[tag] || 'bg-pink-100 text-pink-600';
  };

  const tabs = [
    { value: 'all' as const, label: 'Semua Proyek', icon: Globe, count: liveProjects.length },
    { value: 'featured' as const, label: 'Featured', icon: Star, count: featuredProjects.length },
    { value: 'coming-soon' as const, label: 'Coming Soon', icon: Clock, count: comingSoonProjects.length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 overflow-hidden">
      <style jsx>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(15px, -20px) scale(1.05); opacity: 0.5; }
        }
        @keyframes mockupFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.2); }
          50% { box-shadow: 0 0 35px rgba(236, 72, 153, 0.4); }
        }
        .scroll-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .coming-soon-card {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Mouse Follower */}
      <div className="fixed pointer-events-none z-50" style={{ left: mousePos.x - 200, top: mousePos.y - 200, transition: 'left 1s ease-out, top 1s ease-out' }}>
        <div className="w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, rgba(139,92,246,0.02) 40%, transparent 70%)', opacity: mousePos.x > 0 ? 1 : 0 }} />
      </div>

      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[120px]" style={{ animation: 'floatOrb 8s ease-in-out 0s infinite' }} />
        <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-purple-400/10 blur-[120px]" style={{ animation: 'floatOrb 8s ease-in-out 4s infinite' }} />
      </div>

      {/* Hero */}
      <section className="relative border-b border-gray-100/50">
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
          
          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="w-4 h-4" />
              Portfolio Highlights
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Proyek Terbaik Saya</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Koleksi karya terbaik yang membuktikan dedikasi terhadap kualitas, inovasi, dan dampak nyata
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {[
                { value: liveProjects.length, label: 'Live Projects', icon: '🚀' },
                { value: featuredProjects.length + comingSoonProjects.length, label: 'Featured', icon: '⭐' },
                { value: comingSoonProjects.length, label: 'Coming Soon', icon: '🔮' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold">{stat.value}+</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Tab Filter - LARGER */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setTab(t.value)}
              className={`px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center gap-2 ${
                tab === t.value
                  ? 'bg-pink-50 text-pink-600 shadow-sm border border-pink-200'
                  : 'bg-white text-gray-600 hover:bg-pink-50/50 hover:text-pink-500 border border-gray-200'
              }`}
            >
              <t.icon className="w-5 h-5" />
              {t.label}
              <span className={`text-sm font-medium ${tab === t.value ? 'text-pink-400' : 'text-gray-400'}`}>({t.count})</span>
            </button>
          ))}
        </div>

        {/* Tech Stack Filter - LARGER */}
        {availableTechs.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setTechFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !techFilter 
                  ? 'bg-teal-100 text-teal-700 shadow-sm border border-teal-200' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-teal-50 hover:text-teal-600'
              }`}
            >
              All Tech
            </button>
            {availableTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setTechFilter(tech === techFilter ? null : tech)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  techFilter === tech 
                    ? 'bg-orange-100 text-orange-700 shadow-sm border border-orange-200' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <section id="projects-grid" ref={(el) => { sectionRefs.current[0] = el; }} className={`scroll-reveal ${isRevealed('projects-grid') ? 'visible' : ''}`}>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id} 
                  className={`group relative ${project.isComingSoon ? 'coming-soon-card' : ''}`}
                  style={{ 
                    transform: isRevealed('projects-grid') ? 'translateY(0) scale(1)' : 'translateY(25px) scale(0.98)', 
                    opacity: isRevealed('projects-grid') ? 1 : 0, 
                    transition: `all 0.5s ease ${idx * 0.1}s` 
                  }}>
                  
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-40 blur-sm transition-all duration-500 ${project.isComingSoon ? 'opacity-20' : ''}`} />
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 border border-gray-100 h-full">
                    <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                    
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-400`} />
                      
                      {!project.isComingSoon && !imageErrors.has(project.id) && project.live !== '#' ? (
                        <Image
                          src={getThumbnail(project.live)}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          onError={() => handleImageError(project.id)}
                        />
                      ) : null}
                      
                      <div className={`absolute inset-0 flex items-center justify-center ${!project.isComingSoon && !imageErrors.has(project.id) && project.live !== '#' ? 'hidden' : ''}`}>
                        <div className="text-center">
                          <div className="text-5xl mb-3" style={{ animation: 'mockupFloat 3s ease-in-out infinite' }}>{project.icon}</div>
                          {project.isComingSoon && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full font-semibold text-sm">
                              <Zap className="w-4 h-4" /> Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {project.featured && (
                          <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                            <Star className="w-3.5 h-3.5 fill-white" /> Featured
                          </span>
                        )}
                        {project.isComingSoon && (
                          <span className="bg-purple-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      
                      <div className="absolute bottom-3 right-3 text-3xl font-bold text-purple-300/30">0{idx + 1}</div>
                    </div>
                    
                    {/* Content - LARGER FONTS */}
                    <div className="p-6">
                      <div className="text-4xl mb-4">{project.icon}</div>
                      <h3 className="font-bold text-gray-800 mb-1.5 text-2xl group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                        style={{ backgroundImage: `linear-gradient(135deg, ${project.color1}, ${project.color2})` }}>
                        {project.title}
                      </h3>
                      <p className="text-base font-semibold mb-3" style={{ color: project.color1 }}>{project.subtitle}</p>
                      <p className="text-gray-600 text-base mb-5 leading-relaxed line-clamp-3">{project.description}</p>
                      
                      {/* Tags - LARGER */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setTechFilter(techFilter === tag ? null : tag)}
                            className={`text-sm px-3 py-1 rounded-full font-semibold transition-all duration-300 hover:opacity-90 ${getTagColor(tag)}`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {project.isComingSoon ? (
                          <span className="inline-flex items-center gap-1.5 text-base text-purple-600 font-semibold">
                            <Heart className="w-5 h-5" /> Dalam Pengembangan
                          </span>
                        ) : (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                            Live Demo <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        
                        {project.github ? (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100">
                            <GitHubIcon className="w-5 h-5" />
                          </a>
                        ) : (
                          <span className="text-sm text-gray-400">{project.isComingSoon ? '🔮' : 'Private'}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-semibold text-gray-800 text-lg mb-2">Tidak ada proyek ditemukan</h3>
              <p className="text-gray-500 text-base">Coba ubah filter atau tab yang dipilih</p>
              <button
                onClick={() => { setTechFilter(null); setTab('all'); }}
                className="mt-4 px-5 py-2.5 bg-blue-500 text-white rounded-xl text-base font-semibold hover:bg-blue-600 transition-all shadow-sm"
              >
                Reset Filter
              </button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section id="cta-section" ref={(el) => { sectionRefs.current[1] = el; }} className={`scroll-reveal mt-16 ${isRevealed('cta-section') ? 'visible' : ''}`}>
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Punya Ide Keren?</h2>
              <p className="text-blue-100 mb-6 max-w-md mx-auto text-base">
                Saya selalu terbuka untuk kolaborasi, diskusi proyek, atau sekadar bertukar ide.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group">
                  Mulai Kolaborasi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://github.com/fitriadamayanti12" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}