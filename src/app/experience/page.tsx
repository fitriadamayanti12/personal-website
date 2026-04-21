// src/app/experience/page.tsx
'use client';

import { Briefcase, Calendar, MapPin, Building2, Award, FileText, ExternalLink, GraduationCap, BadgeCheck, Sparkles, ChevronRight, Trophy, Bookmark, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Data pengalaman kerja dari CV
const workExperiences = [
  {
    id: 1,
    title: "Founder & Lead Developer",
    company: "Next Generation Bimbel & Community Library",
    location: "Jambi, Indonesia (Self-funded)",
    period: "September 2025 - Present",
    type: "current",
    highlights: [
      "Bootstrapping a local tutoring platform and digital library using Next.js, TypeScript, Supabase, and Tailwind CSS",
      "Developing open-source tools: Health Tracker for Mom, Kid Arcade, and PagePulse for community caregiving and education needs",
      "Delivered a commercial website for 'Titik Koma' English Course & Translation Services (Next.js, Tailwind, Vercel), handling end-to-end development and deployment",
      "Managing full-stack deployment on Vercel and Supabase, demonstrating production-ready development under resource constraints",
      "Balancing full-time family caregiving responsibilities with consistent software output and community engagement"
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"]
  },
  {
    id: 2,
    title: "Security Engineer & Frontend Developer",
    company: "SysBraykr",
    location: "Yogyakarta (Full-time)",
    period: "July 2024 - February 2025",
    type: "past",
    highlights: [
      "Revamped SOC dashboard (Vue.js) and authored Incident Response Playbooks to unify threat monitoring and standardize mitigation procedures",
      "Developed security baselines, system hardening guidelines, and integrated secure coding standards into the Mantra platform's Vue.js codebase",
      "Collaborated with security analysts to improve threat detection workflows and SOC operational efficiency"
    ],
    techStack: ["Vue.js", "JavaScript", "SOC", "Security Hardening", "Incident Response"]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Elabram Systems",
    location: "Full-time Remote",
    period: "April 2022 - March 2023",
    type: "past",
    highlights: [
      "Developed Xremo, a Malaysian job portal, using Vue.js and Nuxt.js; implemented responsive UI components serving thousands of monthly users",
      "Built Axdif, a task management application, using Angular and TypeScript with clean architecture and reusable components",
      "Collaborated remotely with cross-functional teams across Malaysia and Indonesia within Agile sprints"
    ],
    techStack: ["Vue.js", "Nuxt.js", "Angular", "TypeScript", "Agile"]
  },
  {
    id: 4,
    title: "Full-Stack JavaScript Facilitator (Mentor)",
    company: "PT. Lentera Bangsa Benderang (Binar Academy)",
    location: "Part-time Remote",
    period: "2022 - 2023 (Multiple Cohorts)",
    type: "past",
    highlights: [
      "Delivered 320+ instructional hours across multiple Full-Stack JavaScript cohorts (Node.js, React, Express)",
      "Mentored 65+ students individually, guiding frontend and backend project development",
      "Achieved an average facilitator rating of 4.56/5.0 from student evaluations"
    ],
    techStack: ["Node.js", "React", "Express", "JavaScript", "Mentoring"]
  },
  {
    id: 5,
    title: "Full-Stack Developer & Technical Writer",
    company: "PT. Suteki Karya Nusantara",
    location: "Bandung (Full-time Remote)",
    period: "April 2020 - April 2022",
    type: "past",
    highlights: [
      "Engineered 4+ institutional web solutions (University MIS, e-Library, LMS) serving 1,000+ users",
      "Developed full-stack applications using JavaScript (Vue.js, jQuery), PHP (Native, CodeIgniter), and SQL",
      "Authored technical blog articles on education technology and software development"
    ],
    techStack: ["Vue.js", "jQuery", "PHP", "CodeIgniter", "SQL"]
  }
];

// Data penelitian
const research = {
  title: "Research Trends in Intrusion Detection System for Web Detection: Datasets, Methods and Challenges",
  conference: "8th ICITISEE 2024 (IEEE)",
  doi: "10.1109/ICITISEE63424.2024.10730158",
  link: "https://doi.org/10.1109/ICITISEE63424.2024.10730158"
};

// Data sertifikasi
const certifications = [
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    credential: "Credly Badge"
  }
];

// Data pendidikan
const education = [
  {
    degree: "Master of Information Technology (M.Eng)",
    field: "Network & Cyber Security",
    institution: "Gadjah Mada University (UGM)",
    location: "Yogyakarta",
    period: "Feb 2023 - Jul 2025",
    gpa: "3.44",
    thesis: "Analysis of the Effectiveness of Security Orchestration, Automation, and Response (SOAR) within the DevOps Lifecycle for Web Vulnerability Detection"
  },
  {
    degree: "Bachelor of Information Systems (S.Kom)",
    field: "",
    institution: "Metamedia University",
    location: "Padang",
    period: "Sep 2015 - Mar 2019",
    gpa: "3.96",
    thesis: "Web-based Teacher Certification Information System for Ministry of Religious Affairs, Merangin Regency"
  }
];

// Badge warna untuk tech stack
const getTechBadgeColor = (tech: string) => {
  const colors: Record<string, string> = {
    "Next.js": "bg-gray-900 text-white shadow-md",
    "TypeScript": "bg-blue-600 text-white shadow-md",
    "Supabase": "bg-green-600 text-white shadow-md",
    "Tailwind CSS": "bg-teal-600 text-white shadow-md",
    "Vercel": "bg-black text-white shadow-md",
    "Vue.js": "bg-emerald-600 text-white shadow-md",
    "JavaScript": "bg-yellow-500 text-gray-900 shadow-md",
    "Angular": "bg-red-600 text-white shadow-md",
    "Node.js": "bg-lime-600 text-white shadow-md",
    "React": "bg-cyan-600 text-white shadow-md",
    "PHP": "bg-indigo-600 text-white shadow-md",
    "SOC": "bg-purple-600 text-white shadow-md",
    "Security Hardening": "bg-rose-600 text-white shadow-md",
    "Incident Response": "bg-orange-600 text-white shadow-md",
    "Mentoring": "bg-pink-600 text-white shadow-md",
  };
  return colors[tech] || "bg-gray-100 text-gray-700 shadow-sm";
};

export default function ExperiencePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section dengan Efek Modern */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            My Professional Journey
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            Professional Experience
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Full-Stack Developer & Security Engineer with 5+ years of experience
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Work Experience Section dengan Timeline Modern */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Work Experience</h2>
              <p className="text-gray-500 mt-1">My professional journey through the years</p>
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>
            
            <div className="space-y-8">
              {workExperiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(exp.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-[112px] top-6 w-4 h-4 bg-white rounded-full border-4 border-purple-500 z-10 shadow-lg"></div>
                  
                  <div className="lg:ml-40">
                    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-1 ${
                      hoveredCard === exp.id ? 'shadow-2xl' : ''
                    }`}>
                      {/* Gradient Top Bar */}
                      <div className={`h-1.5 bg-gradient-to-r ${
                        exp.type === "current" 
                          ? 'from-green-500 to-emerald-500' 
                          : 'from-blue-500 to-purple-500'
                      }`}></div>
                      
                      <div className="p-6 md:p-8">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {exp.title}
                              </h3>
                              {exp.type === "current" && (
                                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-md animate-pulse">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Building2 className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 pb-3 border-b border-gray-100">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 group/item">
                              <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <ChevronRight className="w-3 h-3 text-white" />
                              </div>
                              <span className="leading-relaxed group-hover/item:text-gray-900 transition-colors">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`${getTechBadgeColor(tech)} px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Publications Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Research & Publications</h2>
              <p className="text-gray-500 mt-1">Academic contributions and research work</p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-md">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">IEEE Publication</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{research.title}</h3>
                  <p className="text-purple-700 font-medium mb-2">{research.conference}</p>
                  <p className="text-sm text-gray-500 mb-3 font-mono">DOI: {research.doi}</p>
                  <a
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Publication <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section dengan Cards Modern */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Education</h2>
              <p className="text-gray-500 mt-1">Academic background and achievements</p>
            </div>
          </div>
          
          <div className="grid gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border-l-[6px] border-l-emerald-500">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      {edu.field && <p className="text-emerald-600 font-semibold mb-2">{edu.field}</p>}
                      <p className="text-gray-700 font-medium">{edu.institution}</p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 rounded-full shadow-md">
                      <span className="text-white font-bold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-4 bg-gray-50 rounded-xl">
                    <p className="text-gray-700 text-sm">
                      <span className="font-bold text-gray-800">📖 Thesis:</span> {edu.thesis}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl shadow-lg">
                <BadgeCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Certifications</h2>
                <p className="text-gray-500 mt-1">Professional credentials and badges</p>
              </div>
            </div>
            
            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 hover:border-orange-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <BadgeCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                      <p className="text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                    <div className="text-xs text-gray-400">{cert.credential}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <Bookmark className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h3 className="text-2xl font-bold mb-2">Ready to Collaborate?</h3>
              <p className="text-blue-100 mb-4">Let's work together on your next project</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}