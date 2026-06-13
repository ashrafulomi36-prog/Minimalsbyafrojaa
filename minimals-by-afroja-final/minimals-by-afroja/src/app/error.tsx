"use client";

import { useEffect } from "react";
import Link from "next/link";

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
    <div className="min-h-screen flex items-center justify-center px-4 bg-secondary">
      <div className="text-center">
        <span className="text-7xl block mb-6" aria-hidden="true">
          😕
        </span>
        <h2 className="font-display text-3xl font-semibold text-text mb-3">
          Something went wrong
        </h2>
        <p className="font-body text-text-muted text-sm max-w-sm mx-auto mb-8">
          We ran into an unexpected error. Please try again.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-outline">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
