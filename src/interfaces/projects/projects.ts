import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  content: string;
  image?: StaticImageData;
  summary: string;
  tech: string[];
  live?: string;
  repo: string;
  html: string;
}