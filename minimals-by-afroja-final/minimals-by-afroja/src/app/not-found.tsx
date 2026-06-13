import Link from "next/link";
import SiteLayout from "@/components/layout/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <span className="text-7xl block mb-6" aria-hidden="true">
            🎂
          </span>
          <h1 className="font-display text-4xl font-semibold text-text mb-3">
            Page Not Found
          </h1>
          <p className="font-body text-text-muted text-base max-w-sm mx-auto mb-8">
            Looks like this page took a different slice. Let&apos;s get you back
            to something delicious.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/cakes" className="btn-outline">
              Browse Cakes
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
