import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function Projects() {
  // Filter featured projects (optional)
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Featured</h2>
          <div className="space-y-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section>
        <h2 className="text-xl font-semibold mb-4">All Projects</h2>
        <div className="space-y-6">
          {otherProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}