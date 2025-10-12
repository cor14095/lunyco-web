import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/content/blog/posts-mock";


export const revalidate = 300;


export default async function BlogPage() {
  // TODO: Fetch posts from a CMS or backend
  const posts = await getAllPosts();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(p => <PostCard key={p.slug} post={p} />)}
      </div>
    </div>
  );
}