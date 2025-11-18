import { getAllProjects } from '@/content/projects/projects-mock';
import { ProjectsClient } from './projects-client';

export const revalidate = 300;

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return <ProjectsClient projects={projects} />;
}
