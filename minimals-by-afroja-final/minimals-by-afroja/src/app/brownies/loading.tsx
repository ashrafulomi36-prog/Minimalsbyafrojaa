import { ProductGridSkeleton } from "@/components/ui/Skeletons";

export default function CategoryLoading() {
  return (
    <div>
      {/* Header skeleton */}
      <div className="bg-secondary py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="skeleton h-12 w-12 rounded-full mx-auto" />
          <div className="skeleton h-4 w-32 rounded mx-auto" />
          <div className="skeleton h-9 w-48 rounded mx-auto" />
          <div className="skeleton h-4 w-80 rounded mx-auto" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="skeleton h-4 w-24 rounded mb-8" />
        <ProductGridSkeleton count={6} />
      </div>
    </div>
  );
}
