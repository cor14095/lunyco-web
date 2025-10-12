import Link from 'next/link';
import { PostCard } from '../components/post-card';
import { ProjectCard } from '../components/project-card';
import { getAllPosts } from '../content/blog/posts-mock';
import { getAllProjects } from '../content/projects/projects-mock';

export const revalidate = 60; // ISR for homepage

export default async function HomePage() {
  const [projects, posts] = await Promise.all([
    getAllProjects(),
    getAllPosts()
  ]);


  return (
    <div className="space-y-20">
      {/* Hero */}
      <section id="about" className="space-y-6 flex flex-col gap-1">
        <h1 className="text-4xl font-bold tracking-tight flex flex-col md:flex-row gap-0 md:gap-2">
          Alejandro Cortes
          <a href="mailto:ale@lunyco.com" className="text-blue-500 text-sm mt-auto">ale@lunyco.com</a>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Full-Stack Engineer (Next.js + Django) and QA Automation specialist transitioning into AI Engineering. I build
          public, production-grade apps with great DX, tests, and clean infrastructure.
        </p>
        <div className="flex gap-3">
          <Link className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20" href="/projects">View Projects</Link>
          <Link className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/10" href="/contact">Contact</Link>
        </div>
      </section>


      {/* Skills */}
      <section id="skills" className="space-y-4">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300 sm:grid-cols-3 md:grid-cols-4">
          {['TypeScript', 'Next.js 15', 'React', 'Django', 'DRF', 'Node.js', 'PostgreSQL', 'AWS (Amplify, RDS, AppRunner, Secrets Manager)', 'CI/CD', 'Cypress', 'Playwright', 'Jest', 'Tailwind CSS', 'RAG / Embeddings (in progress)'].map(s => (
            <li key={s} className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">{s}</li>
          ))}
        </ul>
      </section>


      {/* Projects */}
      <section id="projects" className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Link href="/projects" className="text-sm text-gray-300 hover:underline">See all</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>


      {/* Work Experience */}
      <section id="experience" className="space-y-4">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <ul className="space-y-3 text-sm text-gray-300">
          <li><b>The SilverLogic</b> - Full-Stack & Automation Engineer (2024-Present)</li>
          <li><b>Freelance</b> - Full-Stack Engineer (2023-Present)</li>
          <li><b>Xoom / PayPal</b> - Senior QA Automation (2020-2024)</li>
          <li><b>Zuntex</b> - Lead Software Engineer (2019-2020)</li>
        </ul>
      </section>


      {/* Blog */}
      <section id="blog" className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Latest Writing</h2>
          <Link href="/blog" className="text-sm text-gray-300 hover:underline">All posts</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {posts.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </div>
  );
}