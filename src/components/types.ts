export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'security' | 'tools';
  level?: 'beginner' | 'intermediate' | 'advanced';
}