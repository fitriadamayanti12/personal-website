import { Skill } from '@/components/types';
import { Award, Code, Heart, Shield, BookOpen, Target, Clock, Users } from 'lucide-react';

const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Cybersecurity', category: 'security' },
  { name: 'SQL', category: 'backend' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Software Developer, Security Specialist, and Lifelong Learner
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* My Journey */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">My Journey</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              After completing my Master's in Information Technology at UGM with a concentration in 
              Network and Cybersecurity, I made a choice that changed my life: I returned to my 
              hometown to care for my mother who has diabetes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Some said I was falling behind in my career. But I believe that caring for family 
              is not a delay—it's a foundation. This decision taught me patience, resilience, 
              and the true meaning of priorities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, I continue to build my skills in software development and cybersecurity 
              while preparing for new opportunities and sharing what I learn through content 
              and community engagement.
            </p>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Professional Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Software Engineer</h3>
              <p className="text-sm text-gray-500 mb-3">4+ years of experience</p>
              <p className="text-gray-600 text-sm">
                Full-stack development across frontend and backend, building scalable web applications 
                with modern frameworks and technologies.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Security Engineer</h3>
              <p className="text-sm text-gray-500 mb-3">Blue Team Experience</p>
              <p className="text-gray-600 text-sm">
                Security monitoring, threat detection, and implementing best practices for 
                secure software development.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Tech Educator</h3>
              <p className="text-sm text-gray-500 mb-3">Programming & Cybersecurity Instructor</p>
              <p className="text-gray-600 text-sm">
                Teaching coding and cybersecurity concepts, helping students build strong 
                foundations in technology.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Remote Work Expert</h3>
              <p className="text-sm text-gray-500 mb-3">4 years of remote experience</p>
              <p className="text-gray-600 text-sm">
                Proven track record of working effectively in distributed teams across 
                different time zones and cultures.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Code className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Tech Stack</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === 'frontend').map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === 'backend').map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Security & Others
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => s.category === 'security' || s.category === 'tools').map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Impact Mission */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">My Mission</h2>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100 p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond coding and security, my biggest dream is to create a reading house in my village 
              and provide scholarships for children who deserve a chance. I believe that education 
              is the most powerful tool to change lives, and I want to be part of that change.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Because in the end, the most meaningful code isn't just about functionality—
              it's about creating space for real connection and opening doors for others.
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Something About Me</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-sm border p-4 text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">4+</p>
              <p className="text-xs text-gray-500">Years of Experience</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-4 text-center">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">100+</p>
              <p className="text-xs text-gray-500">Students Taught</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-4 text-center">
              <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">S2</p>
              <p className="text-xs text-gray-500">Master's Degree</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border p-4 text-center">
              <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">Blue Team</p>
              <p className="text-xs text-gray-500">Security Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}