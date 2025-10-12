import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/src/interfaces/projects';


export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {project.image && (
        <Image src={project.image} alt="" width={1200} height={630} className="h-48 w-full object-cover" />
      )}
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold group-hover:underline">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="line-clamp-3 text-sm text-gray-300">{project.summary}</p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
          {project.tech.slice(0, 5).map(t => (
            <span key={t} className="rounded-md bg-white/10 px-2 py-1">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}