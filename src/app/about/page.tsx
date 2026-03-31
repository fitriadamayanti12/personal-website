import { Skill } from '@/components/types';

const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Cybersecurity', category: 'security' },
  { name: 'Python', category: 'backend' },
];

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      {/* My Journey */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">My Journey</h2>
        <p className="text-gray-700 mb-4">
          After completing my Master's in Information Technology at UGM, 
          I made a choice that changed my life: I returned to my hometown 
          to care for my mother who has diabetes.
        </p>
        <p className="text-gray-700 mb-4">
          Some said I was falling behind in my career. But I believe 
          that caring for family is not a delay—it's a foundation.
        </p>
        <p className="text-gray-700">
          Today, I continue to build my skills in software development 
          and cybersecurity while preparing for the civil service exam 
          and sharing what I learn through content and community.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill.name}
              className="bg-gray-100 px-3 py-1 rounded"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Fun Fact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Something About Me</h2>
        <p className="text-gray-700">
          I once taught coding and cybersecurity, but now I'm also learning 
          how to teach my mother to use her phone without getting overwhelmed. 
          Turns out, patience is the hardest skill to master.
        </p>
      </section>
    </main>
  );
}