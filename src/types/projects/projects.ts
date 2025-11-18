export interface Project {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  content: string;
  image?: string;
  summary: string;
  tech: string[];
  live?: string;
  repo: string;
  html: string;
}