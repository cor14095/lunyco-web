import type { Project } from '@/types/projects';

const projects: Project[] = [
  {
    title: 'Baxzar Platform',
    slug: 'baxzar-platform',
    excerpt: 'Full-stack e-commerce solution with Next.js and Django REST API.',
    date: '2024-10-01',
    content: 'A complete e-commerce platform featuring user authentication, product management, shopping cart, and payment integration.',
    image: '/baxzar.jpg',
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
  {
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    excerpt: 'Modern portfolio site built with Next.js 16 and React Query.',
    date: '2025-11-18',
    content: 'Personal portfolio showcasing projects, blog posts, and professional experience with modern web technologies.',
    image: '/lunyco.png',
    summary: 'This portfolio demonstrates advanced Next.js patterns including Server Components, React Query for data fetching, and a Perry the Platypus-inspired color scheme.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'React Query', 'Tailwind CSS 4', 'Shadcn/UI'],
    live: 'https://lunyco.com',
    repo: 'https://github.com/cor14095/lunyco-backend',
    html: `
      <h2>About This Project</h2>
      <p>This portfolio site demonstrates modern web development practices with the latest React and Next.js features.</p>
      
      <h3>Features</h3>
      <ul>
        <li>GitHub stats integration with React Query</li>
        <li>Perry the Platypus-inspired color palette</li>
        <li>Shadcn/UI component library</li>
        <li>SEO optimized with structured data</li>
        <li>Responsive design with mobile navigation</li>
      </ul>
    `
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}