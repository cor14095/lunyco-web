import { useQuery } from '@tanstack/react-query';

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
  html_url: string;
  description: string;
}

interface GitHubStats {
  stars: number;
  forks: number;
  watchers: number;
  lastUpdated: string;
  url: string;
  description: string;
}

/**
 * Fetch GitHub repository stats
 * Example: owner = "vercel", repo = "next.js"
 */
async function fetchGitHubStats(owner: string, repo: string): Promise<GitHubStats> {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      // Optional: Add your GitHub token for higher rate limits
      // Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch repo: ${response.statusText}`);
  }

  const data: GitHubRepo = await response.json();

  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
    watchers: data.watchers_count,
    lastUpdated: data.updated_at,
    url: data.html_url,
    description: data.description,
  };
}

/**
 * Hook to get GitHub repository statistics
 * 
 * @example
 * ```tsx
 * const { data, isLoading, error } = useGitHubStats('vercel', 'next.js');
 * ```
 */
export function useGitHubStats(owner: string, repo: string, enabled = true) {
  return useQuery({
    queryKey: ['github-stats', owner, repo],
    queryFn: () => fetchGitHubStats(owner, repo),
    enabled: enabled && !!owner && !!repo,
    // Cache for 10 minutes
    staleTime: 10 * 60 * 1000,
    // Keep in cache for 30 minutes
    gcTime: 30 * 60 * 1000,
  });
}

/**
 * Parse GitHub repo URL to get owner and repo name
 * @example parseGitHubUrl('https://github.com/vercel/next.js') => { owner: 'vercel', repo: 'next.js' }
 */
export function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  try {
    // Remove .git suffix if present
    const cleanUrl = url.replace(/\.git$/, '');
    
    // Match github.com URLs
    const match = cleanUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    
    if (match) {
      return {
        owner: match[1],
        repo: match[2],
      };
    }
    
    return null;
  } catch {
    return null;
  }
}
