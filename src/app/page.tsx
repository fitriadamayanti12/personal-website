'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Code, 
  Shield, 
  Heart, 
  BookOpen, 
  Target, 
  Sparkles, 
  ChevronRight,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';

// Untuk GitHub dan LinkedIn, kita akan buat custom SVG saja
// Karena lucide-react mungkin tidak memiliki export yang tepat

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Software Developer',
    'Security Specialist',
    'Full-Stack Engineer',
    'Open Source Contributor',
    'Community Builder'
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for opportunities
            </div>

            {/* Greeting */}
            <div className="mb-4">
              <span className="text-xl text-gray-500">✨ Hello, I'm</span>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Fitria Damayanti
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="h-16 mb-4">
              <p className="text-xl md:text-2xl text-gray-600">
                <span className="font-medium text-gray-800">{displayText}</span>
                <span className="animate-blink text-blue-600 font-bold">|</span>
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                M.Eng in IT
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                UGM
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                5+ Years Experience
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                IEEE Researcher
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 text-lg">
              Building software, securing systems, and creating opportunities. 
              My dream? A reading house in my village and scholarships for children 
              who deserve a chance. Because the most important code I write 
              is the one that opens doors for others.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                View Experience
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {/* GitHub Icon - Custom SVG */}
              <a
                href="https://github.com/fitriadamayanti12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white text-gray-600 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              {/* LinkedIn Icon - Custom SVG */}
              <a
                href="https://linkedin.com/in/fitria-damayanti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white text-gray-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
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

              {/* Email */}
              <a
                href="mailto:fitria.damayanti.996@gmail.com"
                className="p-2.5 bg-white text-gray-600 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right - Profile Image with Animation */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              {/* Animated Gradient Ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-70 blur-xl animate-pulse"></div>
              
              {/* Rotating Border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-50"></div>
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full ring-4 ring-white shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src="/images/profile.jpg"
                  alt="Fitria Damayanti"
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg p-2 animate-float">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-2 animate-float-delayed">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-2">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 border-y border-gray-100 bg-white/50 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">5+</div>
            <div className="text-sm text-gray-500 mt-1">Years Experience</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-purple-600 group-hover:scale-110 transition-transform">320+</div>
            <div className="text-sm text-gray-500 mt-1">Teaching Hours</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform">65+</div>
            <div className="text-sm text-gray-500 mt-1">Students Mentored</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl font-bold text-amber-600 group-hover:scale-110 transition-transform">4+</div>
            <div className="text-sm text-gray-500 mt-1">Institutions Served</div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Core Competencies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            What I Bring to the Table
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Combining technical expertise with a passion for creating meaningful impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Code,
              title: "Software Development",
              description: "Full-stack development with Next.js, React, TypeScript, and modern frameworks",
              color: "blue"
            },
            {
              icon: Shield,
              title: "Security Engineering",
              description: "Blue team operations, secure coding practices, and vulnerability assessment",
              color: "purple"
            },
            {
              icon: BookOpen,
              title: "Tech Education",
              description: "Teaching programming and cybersecurity to aspiring developers",
              color: "emerald"
            },
            {
              icon: Heart,
              title: "Social Impact",
              description: "Building community library and scholarship programs for children",
              color: "rose"
            }
          ].map((skill, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 text-center overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className={`w-14 h-14 bg-${skill.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-7 h-7 text-${skill.color}-600`} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">{skill.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Featured Projects</h2>
              <p className="text-gray-500">Some of my recent work that I'm proud of</p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              View all projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Health Tracker for Mom",
                description: "Aplikasi pencatat kesehatan untuk memantau gula darah, tekanan darah, dan gejala harian dengan visualisasi data real-time.",
                tags: ["Next.js", "TypeScript", "Supabase", "Chart.js"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Kid Arcade",
                description: "Platform edukasi interaktif untuk anak-anak dengan games yang mengajarkan coding dasar dan logika pemrograman.",
                tags: ["React", "TypeScript", "Tailwind", "Canvas API"],
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "PagePulse",
                description: "Reading tracker dengan timer, goals, achievements, dan book discussion forum untuk komunitas pembaca.",
                tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2 text-xl">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium group-hover:gap-2 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32 animate-pulse delay-1000"></div>
          
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's Create Something Amazing</h2>
            <p className="text-blue-100 mb-8 max-w-md mx-auto text-lg">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite 1.5s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}