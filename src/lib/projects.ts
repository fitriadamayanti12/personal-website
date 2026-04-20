import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Health Tracker for Mom',
    description: 'Aplikasi pencatat kesehatan untuk memantau gula darah, tekanan darah, dan gejala harian. Dilengkapi dengan grafik tren, export PDF, dan pengingat jadwal cek.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Recharts'],
    link: 'https://health-tracker-eta-two.vercel.app/',
    github: 'https://github.com/fitriadamayanti12/health-tracker',
    featured: true
  },
  {
    id: '2',
    title: 'PagePulse',
    description: 'Reading tracker dengan timer baca, target bulanan, statistik, prestasi, review buku, dan forum diskusi.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Lucide'],
    link: 'https://pagepulse-chi.vercel.app/',
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
  },
  {
    id: '5',
    title: 'Kid Arcade',
    description: 'Platform game edukasi untuk anak usia 6+ dengan 7 game seru, sistem reward, leaderboard, dan AI Game Generator. Dibangun dengan Next.js, TypeScript, Tailwind, dan Supabase.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    link: 'https://kid-arcade.vercel.app/',
    github: 'https://github.com/fitriadamayanti12/kid-arcade',
    featured: true
  },
  {
    id: '6',
    title: 'Math Quest Arena',
    description: 'Game edukasi matematika berbasis RPG untuk anak SD-SMP dengan mode Battle (combo system), Adventure (explore map & battle monster), Daily Challenge, Leaderboard ELO, Shop system, dan Daily Streak. Dibangun dengan Next.js 15, TypeScript, Tailwind CSS 4, dan Supabase.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
    link: 'https://math-quest-arena-topaz.vercel.app/',
    github: 'https://github.com/fitriadamayanti12/math-quest-arena',
    featured: true
  },
  {
    id: '7',
    title: 'Next Generation Bimbel',
    description: 'Platform bimbingan belajar online profesional dengan sistem manajemen admin lengkap. Fitur unggulan: pendaftaran siswa, konsultasi online, manajemen pengajar, dashboard admin real-time, dan form interaktif. Dibangun untuk membantu siswa mencapai potensi terbaik mereka.',
    tech: ['Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "shadcn/ui'],
    link: 'https://next-generation-bimbel.vercel.app/',
    featured: true
  }
];