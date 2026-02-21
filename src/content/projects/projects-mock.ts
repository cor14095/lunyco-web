import type { Project } from '@/types/projects';
import projectsData from './projects.json';

const projects: Project[] = projectsData as Project[];

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects
    .filter(p => p.featured)
    .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));
}

export function getProjectBySlug(slug: string) {
  return projects.find(p => p.slug === slug);
}