import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Skeleton */}
      <div className="space-y-8">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-16 w-full max-w-2xl" />
        <Skeleton className="h-24 w-full max-w-3xl" />
        <div className="flex gap-3">
          <Skeleton className="h-11 w-36" />
          <Skeleton className="h-11 w-36" />
          <Skeleton className="h-11 w-48" />
        </div>
      </div>

      {/* Skills Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-24" />
          ))}
        </div>
      </div>

      {/* Projects Skeleton */}
      <div className="space-y-8">
        <Skeleton className="h-10 w-48" />
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-4 rounded-lg border border-border p-6">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-16 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
