export default function ProductLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <div className="skeleton h-3 w-10 rounded" />
        <div className="skeleton h-3 w-3 rounded" />
        <div className="skeleton h-3 w-14 rounded" />
        <div className="skeleton h-3 w-3 rounded" />
        <div className="skeleton h-3 w-32 rounded" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
        {/* Gallery skeleton */}
        <div className="space-y-3">
          <div className="aspect-square skeleton rounded-2xl" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-16 h-16 skeleton rounded-xl flex-shrink-0" />
            ))}
          </div>
        </div>

        {/* Details skeleton */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="skeleton h-4 w-20 rounded" />
            <div className="skeleton h-9 w-3/4 rounded" />
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-2/3 rounded" />
          </div>

          <div className="space-y-2">
            <div className="skeleton h-3 w-16 rounded" />
            <div className="skeleton h-8 w-32 rounded" />
          </div>

          <div className="space-y-2">
            <div className="skeleton h-3 w-24 rounded" />
            <div className="flex gap-2 flex-wrap">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="skeleton h-7 w-28 rounded-full" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="skeleton h-16 rounded-xl" />
            <div className="skeleton h-16 rounded-xl" />
          </div>

          {/* Order form skeleton */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 space-y-4">
            <div className="skeleton h-6 w-36 rounded" />
            <div className="skeleton h-12 w-full rounded-xl" />
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="skeleton h-11 flex-1 rounded-xl" />
              ))}
            </div>
            <div className="skeleton h-16 rounded-2xl" />
            <div className="skeleton h-12 w-full rounded-xl" />
            <div className="skeleton h-12 w-full rounded-xl" />
            <div className="skeleton h-12 w-full rounded-xl" />
            <div className="skeleton h-24 w-full rounded-xl" />
            <div className="skeleton h-14 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
