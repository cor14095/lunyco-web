import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/content/blog/posts-mock';
import { getAllProjects } from '@/content/projects/projects-mock';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://lunyco.com';
  const [posts, projects] = await Promise.all([getAllPosts(), getAllProjects()]);
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/resume`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    ...posts.map(p => ({ url: `${base}/blog/${p.slug}`, lastModified: new Date(p.date) })),
    ...projects.map(p => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date(p.date) }))
  ];
}