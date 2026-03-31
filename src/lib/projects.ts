import { Project } from '@/components/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Digital Parenting Platform',
    description: 'Educational platform with tips for parents managing children\'s gadget use. Built with Next.js and Tailwind.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Markdown'],
    link: 'https://digital-parenting.vercel.app',
    github: 'https://github.com/fitria/digital-parenting',
    featured: true
  },
  {
    id: '2',
    title: 'Personal Blog',
    description: 'Sharing my journey as an IT graduate caring for my mother while building my career.',
    tech: ['Next.js', 'MDX', 'Vercel'],
    github: 'https://github.com/fitria/personal-blog',
    featured: true
  },
  {
    id: '3',
    title: 'Health Tracker for Mom',
    description: 'Simple app to track blood sugar, medication schedule, and doctor appointments.',
    tech: ['React', 'TypeScript', 'LocalStorage'],
    github: 'https://github.com/fitria/health-tracker'
  }
];