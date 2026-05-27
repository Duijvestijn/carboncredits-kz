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
    <div className="min-h-screen bg-kz-dark flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-xs tracking-[0.3em] uppercase text-kz-gold/50 mb-6">Error</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Something<br />
          <span className="italic text-kz-gold">went wrong.</span>
        </h1>
        <p className="text-kz-sand/50 text-lg leading-relaxed mb-10">
          An unexpected error occurred. Please try again or return home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-8 py-4 bg-kz-gold hover:bg-kz-gold-light text-kz-dark font-semibold rounded-xl transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-kz-sand/80 font-medium rounded-xl transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
