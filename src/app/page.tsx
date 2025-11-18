import { getAllPosts } from '@/content/blog/posts-mock';
import { getAllProjects } from '@/content/projects/projects-mock';
import { getResumeData } from '@/content/resume/resume';
import { generatePersonSchema, generateWebSiteSchema } from '@/lib/structured-data';
import { HomeClient } from './home-client';

export const revalidate = 60;

export default async function HomePage() {
  const [projects, posts, resumeData] = await Promise.all([
    getAllProjects(),
    getAllPosts(),
    getResumeData()
  ]);

  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <HomeClient 
      projects={projects} 
      posts={posts} 
      experience={resumeData.experience}
      personSchema={personSchema} 
      websiteSchema={websiteSchema} 
    />
  );
}
