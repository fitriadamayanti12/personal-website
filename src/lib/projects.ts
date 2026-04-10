import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Health Tracker for Mom',
    description: 'Aplikasi pencatat kesehatan untuk memantau gula darah, tekanan darah, dan gejala harian. Dilengkapi dengan grafik tren, export PDF, dan pengingat jadwal cek.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Recharts'],
    link: 'https://health-tracker-eta-two.vercel.app',
    github: 'https://github.com/fitriadamayanti12/health-tracker',
    featured: true
  },
  {
    id: '2',
    title: 'PagePulse',
    description: 'Reading tracker dengan timer baca, target bulanan, statistik, prestasi, review buku, dan forum diskusi.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Lucide'],
    link: 'https://pagepulse-chi.vercel.app',
    github: 'https://github.com/fitriadamayanti12/pagepulse',
    featured: true
  },
  {
    id: '3',
    title: 'Digital Parenting Platform',
    description: 'Platform edukasi untuk orang tua dalam mengelola penggunaan gadget anak.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    github: 'https://github.com/fitriadamayanti12/digital-parenting',
    featured: false
  },
  {
    id: '4',
    title: 'Personal Website & Blog',
    description: 'Personal portfolio dan blog yang membagikan perjalanan sebagai software engineer, cybersecurity enthusiast, dan caregiver.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    link: 'https://personal-website-nine-lilac-87.vercel.app/',
    github: 'https://github.com/fitriadamayanti12/personal-website',
    featured: true
  }
];