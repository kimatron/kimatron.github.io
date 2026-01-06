
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'DEVDACTYL',
    category: 'Web Development Studio',
    description: 'Building custom web apps for Irish and global businesses. Modern design with GSAP animations. No templates, no WordPress.',
    tags: ['React', 'Django', 'GSAP'],
    year: '2023'
  },
  {
    id: '02',
    title: 'IRISH MUSIC ECOMMERCE',
    category: 'Client Project',
    description: "Helping my 92-year-old grandfather take 40 years of Irish music sales digital. React, Django, Stripe integration.",
    tags: ['React', 'Django', 'Stripe'],
    year: '2024'
  },
  {
    id: '03',
    title: 'RAFFLE PLATFORM',
    category: 'Side Project',
    description: 'Competition and raffle management for Irish businesses. Real-time draws, payment processing. Licensing in progress.',
    tags: ['Next.js', 'PostgreSQL', 'Supabase'],
    year: '2024'
  }
];

export const COMPARISONS = [
  { 
    dive: "EQUIPMENT CHECKS @ 60M", 
    dev: "TESTING BEFORE DEPLOYMENT",
    skill: "ATTENTION TO DETAIL" 
  },
  { 
    dive: "UNDERWATER EMERGENCIES", 
    dev: "DEBUGGING AT 2AM",
    skill: "PROBLEM-SOLVING UNDER PRESSURE" 
  },
  { 
    dive: "NITROGEN NARCOSIS", 
    dev: "INEXPLICABLE NPM ERRORS",
    skill: "STAYING CALM IN CHAOS" 
  },
  { 
    dive: "DIVE PLANNING & SAFETY", 
    dev: "SPRINT PLANNING & SECURITY",
    skill: "COMPLEX SYSTEM MANAGEMENT" 
  },
  { 
    dive: "BUDDY CHECKS", 
    dev: "PEER CODE REVIEWS",
    skill: "TEAM COORDINATION" 
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Mastercard (Dublin)',
    period: '2025 — PRESENT',
    details: 'Working with secure payment systems and enterprise infrastructure. Still figuring out that M11 commute.'
  },
  {
    role: 'Founder & Developer',
    company: 'Devdactyl',
    period: '2024 — PRESENT',
    details: 'Registered Irish company testing things, breaking things, fixing things and building web apps and sites. React, Django, cloud services. No WordPress in sight.'
  },
  {
    role: 'Full-Stack Developer',
    company: 'Teaching Myself (Again)',
    period: '2022 — 2023',
    details: 'Bootcamps, bachelors, banes of my life. Built 30+ projects while learning and working with cloud platforms and modern frameworks. Azure certifications.'
  },
  {
    role: 'Technical Dive Instructor',
    company: 'Six Continents',
    period: '2011 — 2022',
    details: 'Trained 1000+ students in advanced diving techniques across (almost) every continent. Led marine conservation projects. Managed to keep everyone alive.'
  }
];
