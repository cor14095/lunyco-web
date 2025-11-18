'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PostCard } from '@/components/post-card';
import { ProjectCard } from '@/components/project-card';
import { Timeline } from '@/components/timeline';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code2, Database, TestTube, Sparkles } from 'lucide-react';
import type { PostMeta, Project } from '@/types';
import type { Experience } from '@/types/resume';

interface HomeClientProps {
  projects: Project[];
  posts: PostMeta[];
  experience: Experience[];
  personSchema: object;
  websiteSchema: object;
}

const skills = [
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Next.js 16', category: 'frontend' },
  { name: 'React 19', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Django', category: 'backend' },
  { name: 'DRF', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Amplify', category: 'cloud' },
  { name: 'RDS', category: 'cloud' },
  { name: 'Cypress', category: 'testing' },
  { name: 'Playwright', category: 'testing' },
  { name: 'Jest', category: 'testing' },
  { name: 'RAG', category: 'ai' },
  { name: 'Embeddings', category: 'ai' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function HomeClient({ projects, posts, experience, personSchema, websiteSchema }: HomeClientProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="space-y-24 md:space-y-32">
        {/* Hero */}
        <motion.section 
          id="about" 
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 blur-3xl" />
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary"
              >
                <Sparkles className="h-4 w-4" />
                <span>Available for opportunities</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Alejandro Cortes
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Full-Stack Engineer specializing in{' '}
                <span className="text-primary font-semibold">Next.js</span> +{' '}
                <span className="text-accent font-semibold">Django</span>,
                with expertise in QA Automation and a growing focus on AI Engineering.
              </p>
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              I build public, production-grade applications with exceptional developer experience,
              comprehensive testing, and clean infrastructure.
            </p>
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: mounted ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="mailto:ale@lunyco.com">ale@lunyco.com</a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section 
          id="skills" 
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Technical Expertise</h2>
          </div>
          <motion.div className="flex flex-wrap gap-2" variants={container}>
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <Badge 
                  variant="secondary" 
                  className="text-sm px-4 py-1.5 cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects */}
        <motion.section 
          id="projects" 
          className="space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <Link 
              href="/projects" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center gap-1"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <motion.div className="grid gap-6 md:grid-cols-2" variants={container}>
            {projects.map((p) => (
              <motion.div key={p.slug} variants={item}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Work Experience */}
        <motion.section 
          id="experience" 
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TestTube className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <Link 
              href="/resume" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center gap-1"
            >
              View full resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <Timeline experiences={experience} compact />
        </motion.section>

        {/* Blog */}
        <motion.section 
          id="blog" 
          className="space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Latest Writing</h2>
            <Link 
              href="/blog" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors group flex items-center gap-1"
            >
              All posts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <motion.div className="grid gap-6 md:grid-cols-3" variants={container}>
            {posts.map((p) => (
              <motion.div key={p.slug} variants={item}>
                <PostCard post={p} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
