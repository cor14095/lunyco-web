import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects, getProjectBySlug } from '@/src/content/projects/projects-mock';

export const revalidate = 300;

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(p => ({ slug: p.slug }));
}


export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return notFound();
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{project.title}</h1>
      {project.image && (
        <Image src={project.image} alt={project.title} width={1200} height={630} className="rounded-xl border border-white/10" />
      )}
      <p className="text-gray-300">{project.summary}</p>
      <ul>
        <li><b>Tech:</b> {project.tech.join(', ')}</li>
        {project.live && <li><b>Live:</b> <Link href={project.live}>Visit</Link></li>}
        <li><b>Repo:</b> <Link href={project.repo}>GitHub</Link></li>
      </ul>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </article>
  );
}