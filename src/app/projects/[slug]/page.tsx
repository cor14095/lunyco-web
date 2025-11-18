import { getAllProjects, getProjectBySlug } from '@/content/projects/projects-mock';
import { ProjectClient } from './project-client';

export const revalidate = 300;

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return <ProjectClient project={project} />;
}
