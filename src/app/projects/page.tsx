import { ProjectCard } from '@/components/project-card';
import { getAllProjects } from '@/content/projects/projects-mock';

export const revalidate = 300;


export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}