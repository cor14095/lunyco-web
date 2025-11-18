'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-6">
      <div className="rounded-full bg-destructive/10 p-6">
        <AlertCircle className="h-10 w-10 text-destructive" />
      </div>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Failed to load blog posts</h2>
        <p className="text-muted-foreground">
          Something went wrong while fetching the blog posts.
        </p>
      </div>
      <div className="flex gap-3">
        <Button onClick={reset}>Try Again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
