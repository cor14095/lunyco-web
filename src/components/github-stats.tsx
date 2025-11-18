'use client';

import { Star, GitFork, Eye } from 'lucide-react';
import { useGitHubStats, parseGitHubUrl } from '@/hooks/use-github-stats';
import { Skeleton } from '@/components/ui/skeleton';

interface GitHubStatsProps {
  repoUrl: string;
}

export function GitHubStats({ repoUrl }: GitHubStatsProps) {
  const parsed = parseGitHubUrl(repoUrl);
  const { data, isLoading, error } = useGitHubStats(
    parsed?.owner || '',
    parsed?.repo || '',
    !!parsed
  );

  // Don't show anything if URL is invalid or it's not a GitHub repo
  if (!parsed || repoUrl === 'private-repo') {
    return null;
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex gap-3 text-xs text-muted-foreground">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-12" />
      </div>
    );
  }

  // Error state (silently fail)
  if (error || !data) {
    return null;
  }

  return (
    <div className="flex gap-3 text-xs text-muted-foreground">
      <div className="flex items-center gap-1" title="Stars">
        <Star className="h-3 w-3" />
        <span>{data.stars.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-1" title="Forks">
        <GitFork className="h-3 w-3" />
        <span>{data.forks.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-1" title="Watchers">
        <Eye className="h-3 w-3" />
        <span>{data.watchers.toLocaleString()}</span>
      </div>
    </div>
  );
}
