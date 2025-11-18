import { getAllPosts } from '@/content/blog/posts-mock';
import { BlogClient } from './blog-client';

export const revalidate = 300;

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogClient posts={posts} />;
}
