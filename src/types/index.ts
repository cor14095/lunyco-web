// Post Types
export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO
  readingTime: number;
  excerpt?: string;
}

// Project Types
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
  featured?: boolean;
  featuredOrder?: number;
}

// API Types
export interface ApiError {
  message: string;
}

export interface ApiResponse<T = unknown> {
  ok: boolean;
  data?: T;
  error?: string;
}
