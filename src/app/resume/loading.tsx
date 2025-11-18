import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="space-y-12">
      {/* Header Skeleton */}
      <div className="space-y-6">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-3">
            <Skeleton className="h-12 w-72" />
            <Skeleton className="h-8 w-96" />
          </div>
          <Skeleton className="h-11 w-40" />
        </div>
        <Skeleton className="h-24 w-full" />
      </div>

      {/* Experience Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-4 rounded-lg border border-border p-6">
              <Skeleton className="h-6 w-64" />
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-16 w-full" />
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-20" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4 rounded-lg border border-border p-6">
              <Skeleton className="h-6 w-32" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-24" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
