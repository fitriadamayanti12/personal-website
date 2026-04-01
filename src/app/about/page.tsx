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
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Something About Me</h2>
        <p className="text-gray-700 mb-4">
          I earned my Master's in Information Technology from Gadjah Mada University,
          with a concentration in Network and Cybersecurity. Professionally, I've spent
          over 4 years as a software engineer working across both frontend and backend
          development, followed by a role as a security engineer in a blue team setting.
        </p>
        <p className="text-gray-700 mb-4">
          Beyond coding, I've also taught programming and cybersecurity—experiences
          that shaped how I think about technology. Now, alongside caring for my mother,
          I'm driven to help families navigate the digital world wisely: from guiding
          my young nephews on healthy gadget use to supporting parents who want to raise
          children with a balanced relationship with technology.
        </p>
        <p className="text-gray-700">
          Because in the end, the most meaningful code isn't just about functionality—
          it's about creating space for real connection.
        </p>
      </section>
    </main>
  );
}