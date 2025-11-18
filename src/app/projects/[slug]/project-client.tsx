'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { GitHubStats } from '@/components/github-stats';
import type { Project } from '@/types';

export function ProjectClient({ project }: { project: Project | undefined }) {
  if (!project) return notFound();
  
  return (
    <motion.article 
      className="space-y-8 max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button asChild variant="ghost" size="sm" className="-ml-3">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
      </Button>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.summary}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.live && (
            <Button asChild>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live
              </a>
            </Button>
          )}
          {project.repo && project.repo !== 'private-repo' && (
            <Button asChild variant="outline">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>

        {project.repo && <GitHubStats repoUrl={project.repo} />}
      </div>

      {project.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            width={1200} 
            height={630} 
            className="rounded-xl border border-border" 
          />
        </motion.div>
      )}

      <motion.div 
        className="prose prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        dangerouslySetInnerHTML={{ __html: project.html }} 
      />
    </motion.article>
  );
}
