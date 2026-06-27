'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Mail,
  Code,
  Shield,
  Heart,
  BookOpen,
  Sparkles,
  ChevronRight,
  Target,
  Users,
  Globe
} from 'lucide-react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [scrollReveal, setScrollReveal] = useState<Set<string>>(new Set());
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    startX: number;
    startY: number;
    duration: number;
    delay: number;
    color: string;
  }>>([]);
  
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const roles = [
    'Software Developer',
    'Security Specialist',
    'Full-Stack Engineer',
    'Open Source Contributor',
    'Community Builder',
    'Founder NextGen Community'
  ];

  useEffect(() => {
    const colors = [
      'rgba(59, 130, 246, 0.6)',
      'rgba(139, 92, 246, 0.6)',
      'rgba(236, 72, 153, 0.6)',
      'rgba(16, 185, 129, 0.6)',
      'rgba(245, 158, 11, 0.6)',
    ];
    
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      color: colors[i % colors.length],
    }));
    
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, displayText.length - 1)
        : currentRole.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollReveal((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -20px 0px' }
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

  const isRevealed = (id: string) => scrollReveal.has(id);

  const stats = [
    { value: '5+', label: 'Tahun Pengalaman', color: '#3b82f6', gradient: 'from-blue-500 to-cyan-400', icon: '📅' },
    { value: '320+', label: 'Jam Pengajaran', color: '#8b5cf6', gradient: 'from-purple-500 to-violet-400', icon: '🎓' },
    { value: '65+', label: 'Peserta Didampingi', color: '#10b981', gradient: 'from-emerald-500 to-teal-400', icon: '👥' },
    { value: '4+', label: 'Institusi Dilayani', color: '#f59e0b', gradient: 'from-amber-500 to-yellow-400', icon: '🏛️' },
  ];

  const skills = [
    {
      icon: Code,
      title: 'Software Architecture',
      description: 'Merancang dan mengimplementasikan solusi full-stack berskala menggunakan Next.js, React, dan TypeScript.',
      color: '#3b82f6',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Engineering',
      description: 'Menerapkan blue team defense, secure coding practices, dan vulnerability assessment pada sistem.',
      color: '#8b5cf6',
    },
    {
      icon: Globe,
      title: 'Community Leadership',
      description: 'Memimpin Next Generation Community guna menjembatani kesenjangan literasi digital di masyarakat.',
      color: '#10b981',
    },
    {
      icon: Heart,
      title: 'Social Innovation',
      description: 'Menginisiasi program perpustakaan komunitas dan beasiswa pendidikan bagi anak-anak di daerah kurang terlayani.',
      color: '#f43f5e',
    }
  ];

  const projects = [
    {
      title: 'Health Tracker untuk Ibu',
      description: 'Aplikasi pemantau kesehatan komprehensif dengan visualisasi data real-time untuk gula darah, tekanan darah, dan gejala harian.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Chart.js'],
      gradient: 'from-blue-500 to-cyan-500',
      color1: '#3b82f6',
      color2: '#06b6d4',
    },
    {
      title: 'Kid Arcade - Platform Edukasi',
      description: 'Platform pembelajaran interaktif yang mengenalkan basic coding dan logika pemrograman kepada anak-anak melalui games.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Canvas API'],
      gradient: 'from-purple-500 to-pink-500',
      color1: '#8b5cf6',
      color2: '#ec4899',
    },
    {
      title: 'PagePulse - Ekosistem Membaca',
      description: 'Reading tracker dengan fitur goals, achievements, dan forum diskusi untuk membangun komunitas pembaca.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
      gradient: 'from-emerald-500 to-teal-500',
      color1: '#10b981',
      color2: '#14b8a6',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 overflow-hidden">
      <style jsx>{`
        @keyframes morphGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(15px, -20px) scale(1.05); opacity: 0.5; }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(16, 185, 129, 0.5); box-shadow: 0 0 20px rgba(16, 185, 129, 0.2); }
          50% { border-color: rgba(16, 185, 129, 0.8); box-shadow: 0 0 30px rgba(16, 185, 129, 0.4); }
        }
        @keyframes breathingGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.1); }
          50% { box-shadow: 0 0 50px rgba(236, 72, 153, 0.5), 0 0 100px rgba(236, 72, 153, 0.2); }
        }
        @keyframes particleFloat {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: translate(20px, -60px) scale(1.3); }
          90% { opacity: 0.3; transform: translate(-15px, -120px) scale(0.7); }
          100% { transform: translate(10px, -180px) scale(0); opacity: 0; }
        }
        @keyframes lineDash {
          0% { stroke-dashoffset: 1000; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes iconSpin3D {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          25% { transform: rotateY(10deg) rotateX(5deg); }
          50% { transform: rotateY(0deg) rotateX(10deg); }
          75% { transform: rotateY(-10deg) rotateX(5deg); }
          100% { transform: rotateY(0deg) rotateX(0deg); }
        }
        @keyframes mockupFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes dashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -36; }
        }
        @keyframes dashMoveReverse {
          0% { stroke-dashoffset: -36; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes polygonRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ballFlow {
          0% { transform: translateY(-50%) translateX(0); opacity: 1; }
          50% { transform: translateY(-50%) translateX(28px); opacity: 0.3; }
          100% { transform: translateY(-50%) translateX(0); opacity: 1; }
        }
        @keyframes nodePulseBlue {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(59, 130, 246, 0); }
        }
        @keyframes nodePulsePurple {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(139, 92, 246, 0); }
        }
        @keyframes nodePulseEmerald {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(16, 185, 129, 0); }
        }
        @keyframes nodePulseAmber {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(245, 158, 11, 0); }
        }
        @keyframes nodePulseRose {
          0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(244, 63, 94, 0); }
        }
        @keyframes nodePulseIndigo {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.5); }
          50% { box-shadow: 0 0 0 14px rgba(99, 102, 241, 0); }
        }
        @keyframes crystalGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-morph {
          background-size: 300% 300%;
          animation: morphGradient 8s ease infinite;
        }
        .animate-borderGlow {
          animation: borderGlow 3s ease-in-out infinite;
        }
        .animate-breathingGlow {
          animation: breathingGlow 4s ease-in-out infinite;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: particleFloat linear infinite;
          will-change: transform, opacity;
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
        .stat-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .stat-card:hover {
          transform: translateY(-6px) scale(1.02);
        }
        .stat-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        .stats-visible .stat-line {
          animation: lineDash 2s ease forwards;
        }
      `}</style>

      {/* Mouse Follower */}
      <div className="fixed pointer-events-none z-50" style={{ left: mousePos.x - 200, top: mousePos.y - 200, transition: 'left 0.7s ease-out, top 0.7s ease-out' }}>
        <div className="w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)', opacity: mousePos.x > 0 ? 1 : 0 }} />
      </div>

      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p) => (
          <div key={p.id} className="particle" style={{ left: `${p.startX}%`, top: `${p.startY}%`, width: `${p.size}px`, height: `${p.size}px`, background: p.color, boxShadow: `0 0 ${p.size * 3}px ${p.color}`, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }} />
        ))}
      </div>

      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-[100px]" style={{ animation: 'floatOrb 6s ease-in-out 0s infinite' }} />
        <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-[100px]" style={{ animation: 'floatOrb 6s ease-in-out 3s infinite' }} />
      </div>

      {/* ============ HERO ============ */}
      <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-sm font-medium mb-6 shadow-sm animate-borderGlow border-2 border-emerald-200/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Tersedia untuk Kolaborasi Strategis
            </div>

            <div className="mb-4"><span className="text-xl text-gray-500">✨ Halo, saya</span></div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-morph">Fitria Damayanti</span>
            </h1>

            <div className="h-16 mb-4">
              <p className="text-xl md:text-2xl text-gray-600">
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{displayText}</span>
                <span className="animate-pulse text-blue-600 font-bold">|</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {[
                { text: 'M.Eng Teknologi Informasi, UGM', color: 'bg-blue-100 text-blue-700' },
                { text: '5+ Work Experience', color: 'bg-emerald-100 text-emerald-700' },
                { text: 'Software Developer', color: 'bg-purple-100 text-purple-700' },
                { text: 'Security Engineer', color: 'bg-amber-100 text-amber-700' },
                { text: 'Founder Next Generation Community', color: 'bg-indigo-100 text-indigo-700' },
                { text: 'Book Enthusiast', color: 'bg-rose-100 text-rose-700' }
              ].map((badge) => (
                <span key={badge.text} className={`px-3 py-1 ${badge.color} text-xs font-medium rounded-full hover:scale-105 transition-transform cursor-default`}>{badge.text}</span>
              ))}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Building software, securing systems, dan menciptakan peluang melalui teknologi. 
              Saya bercita-cita mendirikan rumah baca di desa serta menyediakan beasiswa 
              bagi anak-anak yang layak mendapatkan kesempatan. Sebab, the most valuable code 
              I write adalah yang membuka pintu bagi orang lain.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link href="/projects" className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">Jelajahi Portofolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link href="/experience" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 bg-white/50 backdrop-blur-sm">
                Pengalaman Profesional
              </Link>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://github.com/fitriadamayanti12" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white text-gray-600 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              </a>
              <a href="https://linkedin.com/in/fitria-damayanti" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="mailto:fitria.damayanti.996@gmail.com" className="p-2.5 bg-white text-gray-600 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Crystal Polygon with Round Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center" style={{ width: '420px', height: '420px' }}>
              
              {/* Outer hexagon */}
              <div className="absolute inset-0" style={{ animation: 'polygonRotate 40s linear infinite' }}>
                <svg viewBox="0 0 440 440" className="w-full h-full">
                  <polygon points="220,20 400,90 400,350 220,420 40,350 40,90" fill="none" stroke="url(#hexGrad)" strokeWidth="2" strokeDasharray="10,8" style={{ animation: 'dashMove 5s linear infinite' }} />
                  <defs><linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" /><stop offset="33%" stopColor="#8b5cf6" stopOpacity="0.8" /><stop offset="66%" stopColor="#ec4899" stopOpacity="0.8" /><stop offset="100%" stopColor="#10b981" stopOpacity="0.8" /></linearGradient></defs>
                </svg>
              </div>

              {/* Middle hexagon */}
              <div className="absolute inset-8" style={{ animation: 'polygonRotate 30s linear infinite reverse' }}>
                <svg viewBox="0 0 424 424" className="w-full h-full">
                  <polygon points="212,40 370,105 370,319 212,384 54,319 54,105" fill="none" stroke="url(#hexGrad2)" strokeWidth="1.5" strokeDasharray="6,5" style={{ animation: 'dashMoveReverse 4s linear infinite' }} />
                  <defs><linearGradient id="hexGrad2" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#10b981" stopOpacity="0.5" /><stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" /><stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" /></linearGradient></defs>
                </svg>
              </div>

              {/* Inner crystal */}
              <div className="absolute inset-16" style={{ animation: 'polygonRotate 25s linear infinite' }}>
                <svg viewBox="0 0 392 392" className="w-full h-full">
                  <polygon points="196,55 340,118 340,274 196,337 52,274 52,118" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4,3" style={{ animation: 'dashMove 3.5s linear infinite' }} />
                </svg>
              </div>

              {/* SVG Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 440 440">
                <line x1="220" y1="220" x2="220" y2="20" stroke="url(#gradTop)" strokeWidth="1.5" strokeDasharray="5,5" style={{ animation: 'dashMove 2.5s linear infinite' }} />
                <line x1="220" y1="220" x2="400" y2="90" stroke="url(#gradTR)" strokeWidth="1.5" strokeDasharray="5,5" style={{ animation: 'dashMove 2.5s linear infinite 0.4s' }} />
                <line x1="220" y1="220" x2="400" y2="350" stroke="url(#gradBR)" strokeWidth="1.5" strokeDasharray="5,5" style={{ animation: 'dashMove 2.5s linear infinite 0.8s' }} />
                <line x1="220" y1="220" x2="220" y2="420" stroke="url(#gradBottom)" strokeWidth="1.5" strokeDasharray="5,5" style={{ animation: 'dashMove 2.5s linear infinite 1.2s' }} />
                <line x1="220" y1="220" x2="40" y2="350" stroke="url(#gradBL)" strokeWidth="1.5" strokeDasharray="5,5" style={{ animation: 'dashMove 2.5s linear infinite 1.6s' }} />
                <line x1="220" y1="220" x2="40" y2="90" stroke="url(#gradTL)" strokeWidth="1.5" strokeDasharray="5,5" style={{ animation: 'dashMove 2.5s linear infinite 2s' }} />
                <line x1="220" y1="20" x2="400" y2="90" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />
                <line x1="400" y1="90" x2="400" y2="350" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
                <line x1="400" y1="350" x2="220" y2="420" stroke="rgba(16,185,129,0.12)" strokeWidth="1" />
                <line x1="220" y1="420" x2="40" y2="350" stroke="rgba(245,158,11,0.12)" strokeWidth="1" />
                <line x1="40" y1="350" x2="40" y2="90" stroke="rgba(244,63,94,0.12)" strokeWidth="1" />
                <line x1="40" y1="90" x2="220" y2="20" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
                <defs>
                  <linearGradient id="gradTop" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" /></linearGradient>
                  <linearGradient id="gradTR" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" /></linearGradient>
                  <linearGradient id="gradBR" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#10b981" stopOpacity="0.9" /><stop offset="100%" stopColor="#10b981" stopOpacity="0.1" /></linearGradient>
                  <linearGradient id="gradBottom" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" /><stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" /></linearGradient>
                  <linearGradient id="gradBL" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" /><stop offset="100%" stopColor="#f43f5e" stopOpacity="0.1" /></linearGradient>
                  <linearGradient id="gradTL" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" /><stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" /></linearGradient>
                </defs>
              </svg>

              {/* Skill Nodes - Diamond shape */}
              {[
                { label: 'Software\nArchitecture', icon: Code, color: '#3b82f6', pulse: 'nodePulseBlue', x: '50%', y: '5%' },
                { label: 'Cybersecurity', icon: Shield, color: '#8b5cf6', pulse: 'nodePulsePurple', x: '91%', y: '20%' },
                { label: 'Community\nLeadership', icon: Globe, color: '#10b981', pulse: 'nodePulseEmerald', x: '91%', y: '80%' },
                { label: 'Social\nInnovation', icon: Heart, color: '#f59e0b', pulse: 'nodePulseAmber', x: '50%', y: '95%' },
                { label: 'Research', icon: BookOpen, color: '#f43f5e', pulse: 'nodePulseRose', x: '9%', y: '80%' },
                { label: 'Teaching', icon: Target, color: '#6366f1', pulse: 'nodePulseIndigo', x: '9%', y: '20%' },
              ].map((skill, idx) => (
                <div key={idx} className="skill-node group absolute z-20" style={{ left: skill.x, top: skill.y, transform: 'translate(-50%, -50%)' }}>
                  <div className="absolute inset-0 rounded-2xl" style={{ animation: `${skill.pulse} 3s ease-in-out ${idx * 0.4}s infinite` }} />
                  <div className="relative w-12 h-12 rotate-45 flex items-center justify-center cursor-pointer transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-110 z-10 rounded-xl"
                    style={{ background: `linear-gradient(135deg, ${skill.color}, ${skill.color}cc)`, boxShadow: `0 4px 20px ${skill.color}50` }}>
                    <div className="rotate-[-45deg]"><skill.icon className="text-white" size={18} /></div>
                    <div className="absolute inset-0 rounded-xl rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-lg" style={{ top: '50%', left: '-10%', transform: 'translateY(-50%) rotate(-45deg)', animation: 'ballFlow 1.5s ease-in-out 0s infinite' }} />
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none" style={{ top: '100%' }}>
                    <div className="bg-gray-900 text-white text-[11px] px-3 py-2 rounded-xl leading-tight text-center shadow-xl">
                      {skill.label.split('\n').map((line, i) => (<div key={i}>{line}</div>))}
                    </div>
                    <div className="w-2 h-2 bg-gray-900 rotate-45 absolute -top-1 left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              ))}

              {/* Crystal glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rotate-45 rounded-2xl blur-2xl" style={{ animation: 'crystalGlow 3s ease-in-out infinite' }} />
              </div>

              {/* Center photo - ROUND */}
              <div className="relative z-10">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -inset-1 rounded-full" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #10b981)', animation: 'polygonRotate 10s linear infinite' }} />
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full ring-[5px] ring-white shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 z-10 pointer-events-none" />
                  <Image src="/images/profile.jpg" alt="Fitria Damayanti" fill className="object-cover hover:scale-110 transition-transform duration-700" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ STATS ============ */}
      <section id="stats-section" ref={(el) => { sectionRefs.current[0] = el; }} className={`scroll-reveal border-b border-gray-100/50 ${isRevealed('stats-section') ? 'visible' : ''}`}>
        <div className="relative max-w-5xl mx-auto px-4 py-16">
          <div className={`relative ${isRevealed('stats-section') ? 'stats-visible' : ''}`}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: '200px' }}>
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient1)" strokeWidth="1.5" className="stat-line" style={{ animationDelay: '0.2s' }} />
              <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient2)" strokeWidth="1.5" className="stat-line" style={{ animationDelay: '0.6s' }} />
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" /><stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" /></linearGradient>
                <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#10b981" stopOpacity="0.6" /><stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" /></linearGradient>
              </defs>
            </svg>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl border border-white/50 cursor-default" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${stat.color}15, transparent 70%)` }} />
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-16`} />
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section id="skills-section" ref={(el) => { sectionRefs.current[1] = el; }} className={`scroll-reveal border-b border-gray-100/50 ${isRevealed('skills-section') ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-4 border border-blue-200/50">
              <Sparkles className="w-4 h-4 animate-pulse" />Kompetensi Inti
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Keahlian yang Saya Tawarkan</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">Memadukan keahlian teknis tingkat lanjut dengan komitmen menciptakan dampak sosial yang berarti</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl p-6 text-center cursor-default transition-all duration-500 hover:shadow-2xl border border-gray-100"
                style={{ transform: isRevealed('skills-section') ? 'translateY(0)' : 'translateY(20px)', opacity: isRevealed('skills-section') ? 1 : 0, transition: `all 0.4s ease ${idx * 0.1}s` }}>
                <div className="relative mb-5">
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: `${skill.color}15`, animation: isRevealed('skills-section') ? `iconSpin3D 6s ease-in-out ${idx * 0.5}s infinite` : 'none' }}>
                    <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-3 text-base">{skill.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects-section" ref={(el) => { sectionRefs.current[2] = el; }} className={`scroll-reveal border-b border-gray-100/50 ${isRevealed('projects-section') ? 'visible' : ''}`}>
        <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-medium mb-5 border border-amber-200/50">
                <Sparkles className="w-4 h-4" />Portfolio Highlights
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Proyek Unggulan</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">Karya terbaik yang mencerminkan dedikasi terhadap kualitas, inovasi, dan dampak nyata</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group relative"
                  style={{ transform: isRevealed('projects-section') ? 'translateY(0) scale(1)' : 'translateY(25px) scale(0.98)', opacity: isRevealed('projects-section') ? 1 : 0, transition: `all 0.5s ease ${idx * 0.1}s` }}>
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-700 group-hover:blur-xl`} />
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className={`h-2 bg-gradient-to-r ${project.gradient} transition-all duration-500 group-hover:h-3`} />
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center" style={{ animation: 'mockupFloat 3s ease-in-out 0s infinite' }}><div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient}`} /></div>
                      <div className="absolute top-8 right-6 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center" style={{ animation: 'mockupFloat 3s ease-in-out 1s infinite' }}><div className={`w-6 h-6 rounded-md bg-gradient-to-br ${project.gradient} opacity-60`} /></div>
                      <div className="absolute bottom-4 left-8 w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center" style={{ animation: 'mockupFloat 3s ease-in-out 2s infinite' }}><div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} opacity-40`} /></div>
                      <div className="absolute bottom-6 right-4 w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center" style={{ animation: 'mockupFloat 3s ease-in-out 0.5s infinite' }}><div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${project.gradient} opacity-80`} /></div>
                      <div className="absolute top-4 right-4 text-4xl font-bold text-gray-200/50 group-hover:text-gray-300/50 transition-colors duration-500">{idx + 1}</div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" style={{ backgroundImage: `linear-gradient(135deg, ${project.color1}, ${project.color2})` }}>{project.title}</h3>
                      <p className="text-gray-500 text-sm mb-5 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (<span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 transition-all duration-300 cursor-default">{tag}</span>))}
                      </div>
                      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl bg-gray-50 text-gray-700 group-hover:text-white transition-all duration-300 overflow-hidden relative"
                        style={{ backgroundImage: `linear-gradient(135deg, ${project.color1}, ${project.color2})`, backgroundSize: '0% 100%', backgroundRepeat: 'no-repeat' }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundSize = '100% 100%' }} onMouseLeave={(e) => { e.currentTarget.style.backgroundSize = '0% 100%' }}>
                        <span className="relative z-10 flex items-center gap-2">Pelajari Selengkapnya <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-14">
              <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
                Lihat Semua Proyek <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section id="cta-section" ref={(el) => { sectionRefs.current[3] = el; }} className={`scroll-reveal ${isRevealed('cta-section') ? 'visible' : ''}`}>
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl animate-breathingGlow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
            <div className="relative z-10">
              <Target className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Mari Bangun Masa Depan Bersama</h2>
              <p className="text-blue-100 mb-8 max-w-md mx-auto text-base">Apabila Anda berminat mendiskusikan potensi kolaborasi, investasi dampak sosial, maupun konsultasi teknologi, saya terbuka untuk berdiskusi.</p>
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Mulai Percakapan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}