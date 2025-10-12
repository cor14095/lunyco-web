import Link from 'next/link';
import type { PostMeta } from '@/types/posts';

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-lg font-semibold hover:underline">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-1 text-xs text-gray-400">{new Date(post.date).toLocaleDateString()} • {post.readingTime} min</p>
      {post.excerpt && <p className="mt-3 line-clamp-3 text-sm text-gray-300">{post.excerpt}</p>}
    </article>
  );
}