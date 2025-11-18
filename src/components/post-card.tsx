import Link from 'next/link';
import type { PostMeta } from '@/types/posts';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
        <CardContent className="p-6 space-y-3">
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
          )}
          <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <time>{post.date}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}