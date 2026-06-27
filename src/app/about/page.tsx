'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import {
  Code,
  Shield,
  Heart,
  BookOpen,
  Target,
  Users,
  Sparkles,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  ChevronRight,
  ArrowRight,
  Clock,
  Globe,
} from 'lucide-react';

const skills = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Cybersecurity', category: 'security' },
  { name: 'SQL', category: 'backend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Docker', category: 'tools' },
  { name: 'AWS', category: 'tools' },
];

const education = [
  {
    degree: "Master of Information Technology (M.Eng)",
    field: "Network & Cyber Security",
    institution: "Universitas Gadjah Mada (UGM)",
    location: "Yogyakarta",
    period: "Feb 2023 - Jul 2025",
    gpa: "3.44",
  },
  {
    degree: "Bachelor of Information Systems (S.Kom)",
    institution: "Universitas Metamedia",
    location: "Padang",
    period: "Sep 2015 - Mar 2019",
    gpa: "3.96",
  }
];

const experiences = [
  {
    icon: Code,
    title: "Software Engineer",
    subtitle: "4+ tahun pengalaman",
    description: "Full-stack development menggunakan React, Next.js, TypeScript, dan framework modern untuk membangun aplikasi web berskala.",
    gradient: "from-blue-500 to-cyan-500",
    color: '#3b82f6',
  },
  {
    icon: Shield,
    title: "Security Engineer",
    subtitle: "Blue Team Specialist",
    description: "Security monitoring, threat detection, dan implementasi secure coding practices untuk pengembangan software yang aman.",
    gradient: "from-purple-500 to-pink-500",
    color: '#8b5cf6',
  },
  {
    icon: BookOpen,
    title: "Tech Educator",
    subtitle: "Programming & Security Instructor",
    description: "Mengajar coding dan cybersecurity, membantu siswa membangun fondasi yang kuat di bidang teknologi.",
    gradient: "from-emerald-500 to-teal-500",
    color: '#10b981',
  },
  {
    icon: Globe,
    title: "Remote Work Expert",
    subtitle: "4+ tahun remote",
    description: "Pengalaman bekerja dalam tim terdistribusi lintas zona waktu dan budaya dengan komunikasi yang efektif.",
    gradient: "from-amber-500 to-orange-500",
    color: '#f59e0b',
  }
];

const funFacts = [
  { icon: Clock, value: "5+", label: "Tahun Pengalaman", color: '#3b82f6' },
  { icon: Users, value: "65+", label: "Peserta Didampingi", color: '#10b981' },
  { icon: GraduationCap, value: "M.Eng", label: "Gelar Master", color: '#8b5cf6' },
  { icon: Shield, value: "Blue Team", label: "Security Expert", color: '#f43f5e' },
];

export default function About() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [scrollReveal, setScrollReveal] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 overflow-hidden">
      <style jsx>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(15px, -20px) scale(1.05); opacity: 0.6; }
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
      `}</style>

      {/* Mouse Follower */}
      <div 
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          transition: 'left 1s ease-out, top 1s ease-out',
        }}
      >
        <div 
          className="w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, rgba(139,92,246,0.02) 40%, transparent 70%)',
            opacity: mousePos.x > 0 ? 1 : 0,
          }}
        />
      </div>

      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[120px]"
          style={{ animation: 'floatOrb 8s ease-in-out 0s infinite' }} />
        <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] rounded-full bg-purple-400/10 blur-[120px]"
          style={{ animation: 'floatOrb 8s ease-in-out 4s infinite' }} />
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
              Lebih dekat dengan saya
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Tentang Saya
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Software Developer, Security Specialist, dan Lifelong Learner
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* My Journey */}
        <section
          id="journey-section"
          ref={(el) => { sectionRefs.current[0] = el; }}
          className={`scroll-reveal mb-20 ${isRevealed('journey-section') ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Perjalanan Saya</h2>
              <p className="text-gray-500 mt-1">Cerita di balik kode</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Gelar Master</p>
                  <p className="font-semibold text-gray-800">UGM - Cybersecurity</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Setelah menyelesaikan Master of Information Technology di UGM dengan konsentrasi 
                Network dan Cybersecurity, saya membuat pilihan yang mengubah hidup: kembali ke 
                kampung halaman untuk merawat ibu saya yang menderita diabetes.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-purple-100"
              style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.03), rgba(236,72,153,0.03))' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pilihan Hidup</p>
                  <p className="font-semibold text-gray-800">Family First</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Beberapa orang berkata saya tertinggal dalam karir. Namun saya percaya bahwa 
                merawat keluarga bukanlah kemunduran—melainkan fondasi. Keputusan ini mengajarkan 
                saya kesabaran, ketahanan, dan makna prioritas yang sesungguhnya.
              </p>
            </div>
          </div>

          <div className="mt-5 bg-white rounded-2xl shadow-md p-6 border border-gray-100 text-center">
            <p className="text-gray-600 leading-relaxed">
              Hari ini, saya terus membangun skills di software development dan cybersecurity 
              sambil mempersiapkan peluang baru dan berbagi pengetahuan melalui konten 
              serta keterlibatan komunitas.
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section
          id="experience-section"
          ref={(el) => { sectionRefs.current[1] = el; }}
          className={`scroll-reveal mb-20 border-t border-gray-100/50 pt-16 ${isRevealed('experience-section') ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Pengalaman Profesional</h2>
              <p className="text-gray-500 mt-1">Keahlian yang saya bawa</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${exp.gradient}`}></div>
                <div className="p-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300"
                    style={{ background: `${exp.color}10` }}>
                    <exp.icon className="w-6 h-6" style={{ color: exp.color }} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1 text-lg">{exp.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{exp.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education-section"
          ref={(el) => { sectionRefs.current[2] = el; }}
          className={`scroll-reveal mb-20 border-t border-gray-100/50 pt-16 ${isRevealed('education-section') ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Pendidikan</h2>
              <p className="text-gray-500 mt-1">Latar belakang akademik</p>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border-l-4 border-emerald-500 border border-gray-100"
                style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1 text-lg">{edu.degree}</h3>
                    {edu.field && <p className="text-emerald-600 font-medium mb-2">{edu.field}</p>}
                    <p className="text-gray-700 font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-gray-500 mt-2">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{edu.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{edu.location}</span>
                    </div>
                  </div>
                  <div className="bg-emerald-50 px-3 py-1.5 rounded-full">
                    <span className="text-emerald-700 font-bold">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section
          id="tech-section"
          ref={(el) => { sectionRefs.current[3] = el; }}
          className={`scroll-reveal mb-20 border-t border-gray-100/50 pt-16 ${isRevealed('tech-section') ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-sm">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Tech Stack</h2>
              <p className="text-gray-500 mt-1">Teknologi yang saya gunakan</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Frontend', cat: 'frontend', color: 'blue' },
                { title: 'Backend', cat: 'backend', color: 'emerald' },
                { title: 'Security', cat: 'security', color: 'purple' },
                { title: 'Tools & DevOps', cat: 'tools', color: 'amber' },
              ].map((group) => (
                <div key={group.cat}>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <div className={`w-2 h-2 bg-${group.color}-500 rounded-full`} />
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.filter(s => s.category === group.cat).map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 bg-${group.color}-50 text-${group.color}-700 rounded-lg text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Mission */}
        <section
          id="mission-section"
          ref={(el) => { sectionRefs.current[4] = el; }}
          className={`scroll-reveal mb-20 border-t border-gray-100/50 pt-16 ${isRevealed('mission-section') ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center shadow-sm">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Misi Saya</h2>
              <p className="text-gray-500 mt-1">Beyond code, creating impact</p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-rose-50/50 via-pink-50/30 to-purple-50/50 rounded-2xl shadow-md p-6 md:p-8 border border-rose-100">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-rose-200/50 to-pink-200/50 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beyond coding and security, impian terbesar saya adalah mendirikan rumah baca 
                  di desa dan menyediakan beasiswa bagi anak-anak yang layak mendapat kesempatan. 
                  Saya percaya bahwa pendidikan adalah alat paling powerful untuk mengubah hidup, 
                  dan saya ingin menjadi bagian dari perubahan itu.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Karena pada akhirnya, kode yang paling bermakna bukan hanya tentang fungsionalitas—
                  melainkan tentang menciptakan ruang untuk koneksi nyata dan membuka pintu 
                  bagi orang lain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section
          id="facts-section"
          ref={(el) => { sectionRefs.current[5] = el; }}
          className={`scroll-reveal border-t border-gray-100/50 pt-16 ${isRevealed('facts-section') ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Tentang Saya</h2>
              <p className="text-gray-500 mt-1">Fakta singkat & pencapaian</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {funFacts.map((fact, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 text-center hover:-translate-y-1 border border-gray-100"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${fact.color}10` }}>
                  <fact.icon className="w-6 h-6" style={{ color: fact.color }} />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-1">{fact.value}</p>
                <p className="text-sm text-gray-500">{fact.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/experience"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Lihat Pengalaman Lengkap
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}