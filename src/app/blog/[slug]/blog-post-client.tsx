'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface Post {
  slug: string;
  title: string;
  date: string;
  readingTime: number;
  content: string;
  excerpt?: string;
}

export function BlogPostClient({ post }: { post: Post | undefined }) {
  if (!post) return notFound();
  
  return (
    <motion.article 
      className="space-y-8 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button asChild variant="ghost" size="sm" className="-ml-3">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
      </Button>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time>{post.date}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>

      <Separator />

      <motion.div 
        className="prose prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {post.content}
      </motion.div>
    </motion.article>
  );
}
