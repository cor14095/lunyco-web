'use client';
import { motion } from 'motion/react';
import { PostCard } from '@/components/post-card';
import { BookOpen } from 'lucide-react';
import type { PostMeta } from '@/types';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function BlogClient({ posts }: { posts: PostMeta[] }) {
  return (
    <motion.div 
      className="space-y-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div className="space-y-3" variants={item}>
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Thoughts on software development, testing, and the journey into AI engineering.
        </p>
      </motion.div>
      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={container}>
        {posts.map((p) => (
          <motion.div key={p.slug} variants={item}>
            <PostCard post={p} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
