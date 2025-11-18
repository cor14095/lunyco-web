'use client';
import { motion } from 'motion/react';
import { ProjectCard } from '@/components/project-card';
import { Database } from 'lucide-react';
import type { Project } from '@/types';

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

export function ProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <motion.div 
      className="space-y-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div className="space-y-3" variants={item}>
        <div className="flex items-center gap-3">
          <Database className="h-8 w-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">All Projects</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of my work spanning full-stack development, automation, and AI engineering.
        </p>
      </motion.div>
      <motion.div className="grid gap-6 md:grid-cols-2" variants={container}>
        {projects.map((p) => (
          <motion.div key={p.slug} variants={item}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
