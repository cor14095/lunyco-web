import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitHubStats } from '@/components/github-stats';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <Card className="overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
        {project.image && (
          <div className="overflow-hidden">
            <Image 
              src={project.image} 
              alt="" 
              width={1200} 
              height={630} 
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
        )}
        <CardContent className="space-y-3 p-5">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="line-clamp-3 text-sm text-muted-foreground">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map(t => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
          </div>
          {project.repo && <GitHubStats repoUrl={project.repo} />}
        </CardContent>
      </Card>
    </Link>
  );
}