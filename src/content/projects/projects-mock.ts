import type { Project } from '@/types/projects';
import baxzarImage from './baxzar.jpg';

const projects: Project[] = [
  {
    title: 'Baxzar Platform',
    slug: 'baxzar-platform',
    excerpt: 'Full-stack e-commerce solution with Next.js and Django REST API.',
    date: '2024-10-01',
    content: 'A complete e-commerce platform featuring user authentication, product management, shopping cart, and payment integration.',
    image: baxzarImage,
    summary: 'Modern e-commerce platform built with Next.js frontend and Django REST API backend, featuring Stripe payments, admin dashboard, and responsive design.',
    tech: ['Next.js 15', 'TypeScript', 'Django', 'DRF', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'AWS'],
    live: 'https://www.baxzar.com',
    repo: 'private-repo',
    html: `
      <h2>Overview</h2>
      <p>This e-commerce platform demonstrates modern full-stack development practices with a focus on performance, security, and user experience.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>User authentication and authorization</li>
        <li>Product catalog with search and filtering</li>
        <li>Shopping cart and checkout process</li>
        <li>Stripe payment integration</li>
        <li>Admin dashboard for inventory management</li>
        <li>Responsive design for all devices</li>
      </ul>
      
      <h3>Technical Highlights</h3>
      <p>The frontend uses Next.js 15 with TypeScript for type safety and modern React features. The backend is built with Django REST Framework, providing a robust API for all operations.</p>
    `
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}