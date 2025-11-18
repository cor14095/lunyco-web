import { getAllPosts, getPostBySlug } from '@/content/blog/posts-mock';
import { BlogPostClient } from './blog-post-client';

export const revalidate = 300;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return <BlogPostClient post={post} />;
}
