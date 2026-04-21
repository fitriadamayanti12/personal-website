'use client';

import { Skill } from '@/components/types';
import { Award, Code, Heart, Shield, BookOpen, Target, Clock, Users, Sparkles, GraduationCap, Briefcase, MapPin, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Cybersecurity', category: 'security' },
  { name: 'SQL', category: 'backend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Docker', category: 'tools' },
  { name: 'AWS', category: 'tools' },
];

const education = [
  {
    degree: "Master of Information Technology (M.Eng)",
    field: "Network & Cyber Security",
    institution: "Gadjah Mada University (UGM)",
    location: "Yogyakarta",
    period: "Feb 2023 - Jul 2025",
    gpa: "3.44",
  },
  {
    degree: "Bachelor of Information Systems (S.Kom)",
    institution: "Metamedia University",
    location: "Padang",
    period: "Sep 2015 - Mar 2019",
    gpa: "3.96",
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section with Parallax Effect */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Get to know me
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-slide-up">
            Software Developer, Security Specialist, and Lifelong Learner
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* My Journey - Featured Story */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">My Journey</h2>
              <p className="text-gray-500 mt-1">The story behind the code</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Master's Degree</p>
                  <p className="font-semibold text-gray-800">UGM - Cybersecurity</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                After completing my Master's in Information Technology at UGM with a concentration in 
                Network and Cybersecurity, I made a choice that changed my life: I returned to my 
                hometown to care for my mother who has diabetes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 border border-purple-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Life Choice</p>
                  <p className="font-semibold text-gray-800">Family First</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Some said I was falling behind in my career. But I believe that caring for family 
                is not a delay—it's a foundation. This decision taught me patience, resilience, 
                and the true meaning of priorities.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-center text-lg">
              Today, I continue to build my skills in software development and cybersecurity 
              while preparing for new opportunities and sharing what I learn through content 
              and community engagement.
            </p>
          </div>
        </div>

        {/* Professional Experience with Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Professional Experience</h2>
              <p className="text-gray-500 mt-1">What I bring to the table</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Code,
                title: "Software Engineer",
                years: "4+ years",
                description: "Full-stack development across frontend and backend, building scalable web applications with modern frameworks and technologies.",
                gradient: "from-blue-500 to-cyan-500",
                bgLight: "bg-blue-50"
              },
              {
                icon: Shield,
                title: "Security Engineer",
                years: "Blue Team Experience",
                description: "Security monitoring, threat detection, and implementing best practices for secure software development.",
                gradient: "from-purple-500 to-pink-500",
                bgLight: "bg-purple-50"
              },
              {
                icon: BookOpen,
                title: "Tech Educator",
                years: "Programming & Security Instructor",
                description: "Teaching coding and cybersecurity concepts, helping students build strong foundations in technology.",
                gradient: "from-emerald-500 to-teal-500",
                bgLight: "bg-emerald-50"
              },
              {
                icon: MapPin,
                title: "Remote Work Expert",
                years: "4+ years remote",
                description: "Proven track record of working effectively in distributed teams across different time zones and cultures.",
                gradient: "from-orange-500 to-red-500",
                bgLight: "bg-orange-50"
              }
            ].map((exp, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className={`h-1 bg-gradient-to-r ${exp.gradient}`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 ${exp.bgLight} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <exp.icon className={`w-7 h-7 text-${exp.gradient.split(' ')[1].replace('-500', '-600')}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{exp.years}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Education</h2>
              <p className="text-gray-500 mt-1">Academic background & achievements</p>
            </div>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-emerald-500">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
                      {edu.field && <p className="text-emerald-600 font-medium mb-2">{edu.field}</p>}
                      <p className="text-gray-700 font-medium">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-emerald-100 px-4 py-2 rounded-full">
                      <span className="text-emerald-700 font-bold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack with Modern Design */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Tech Stack</h2>
              <p className="text-gray-500 mt-1">Technologies I work with</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === 'frontend').map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 hover:scale-105 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === 'backend').map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 hover:scale-105 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  Security
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === 'security').map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 hover:scale-105 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  Tools & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === 'tools').map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-100 hover:scale-105 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Impact Mission - Featured */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">My Mission</h2>
              <p className="text-gray-500 mt-1">Beyond code, creating impact</p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-2xl shadow-lg p-8 md:p-10 border border-red-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Beyond coding and security, my biggest dream is to create a reading house in my village 
                    and provide scholarships for children who deserve a chance. I believe that education 
                    is the most powerful tool to change lives, and I want to be part of that change.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    Because in the end, the most meaningful code isn't just about functionality—
                    it's about creating space for real connection and opening doors for others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts Stats */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Something About Me</h2>
              <p className="text-gray-500 mt-1">Quick facts & achievements</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: "5+", label: "Years of Experience", color: "blue" },
              { icon: Users, value: "65+", label: "Students Mentored", color: "green" },
              { icon: GraduationCap, value: "M.Eng", label: "Master's Degree", color: "purple" },
              { icon: Shield, value: "Blue Team", label: "Security Expert", color: "red" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Experience Page */}
        <div className="mt-16 text-center">
          <Link
            href="/experience"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View Complete Experience
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
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