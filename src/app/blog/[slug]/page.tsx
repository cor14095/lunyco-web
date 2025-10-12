import { getAllPosts, getPostBySlug } from '@/content/blog/posts-mock';
import { notFound } from 'next/navigation';

export const revalidate = 300;

export async function generateStaticParams() {
  // TODO: Fetch posts from a CMS or backend
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-400">{post.date} • {post.readingTime} min read</p>
      <div className="mt-6">{post.content}</div>
    </article>
  );
}