import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitHubStats } from '@/components/github-stats';
import { ExternalLink } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col">
        {project.image && (
          <div className="relative overflow-hidden aspect-video">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={1200} 
              height={630} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            {project.featured && (
              <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </div>
        )}
        <CardContent className="flex-1 flex flex-col space-y-3 p-5">
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
              {project.summary}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map(t => (
                <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.tech.length - 4} more
                </Badge>
              )}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              {project.repo && project.repo !== 'private-repo' ? (
                <GitHubStats repoUrl={project.repo} />
              ) : (
                <div className="text-xs text-muted-foreground">Private Repository</div>
              )}
              {project.live && (
                <div className="flex items-center gap-1 text-xs text-primary">
                  <ExternalLink className="h-3 w-3" />
                  <span>Live</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}