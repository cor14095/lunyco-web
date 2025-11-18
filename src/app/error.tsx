'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-6">
      <div className="rounded-full bg-destructive/10 p-6">
        <AlertCircle className="h-12 w-12 text-destructive" />
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Something went wrong!</h1>
        <p className="text-muted-foreground max-w-md">
          An error occurred while loading this page. Please try again.
        </p>
      </div>
      <div className="flex gap-3">
        <Button onClick={reset}>Try Again</Button>
        <Button variant="outline" asChild>
          <a href="/">Go Home</a>
        </Button>
      </div>
    </div>
  );
}
