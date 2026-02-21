'use client';
import { motion } from 'motion/react';
import { ProjectCard } from '@/components/project-card';
import { Database, ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
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
      className="space-y-12"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Header Section */}
      <motion.div className="space-y-4" variants={item}>
        <div className="flex items-center gap-3">
          <Database className="h-8 w-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">All Projects</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A curated collection of my work spanning full-stack development, e-commerce platforms, 
          legal tech solutions, and AI-powered applications. Each project demonstrates expertise 
          in modern web technologies and problem-solving.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ExternalLink className="h-4 w-4" />
          <span>Click any project to view detailed case study</span>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" 
        variants={container}
      >
        {projects.map((p) => (
          <motion.div key={p.slug} variants={item}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Stats */}
      <motion.div 
        className="pt-8 border-t border-border"
        variants={item}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl font-bold text-primary">{projects.length}</div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-primary">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-sm text-muted-foreground">Featured</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-primary">
              {new Set(projects.flatMap(p => p.tech)).size}
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-primary">
              {projects.filter(p => p.live).length}
            </div>
            <div className="text-sm text-muted-foreground">Live Sites</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
