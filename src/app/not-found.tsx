import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-kz-dark flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-xs tracking-[0.3em] uppercase text-kz-gold/50 mb-6">404</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Page not<br />
          <span className="italic text-kz-gold">found.</span>
        </h1>
        <p className="text-kz-sand/50 text-lg leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-kz-gold hover:bg-kz-gold-light text-kz-dark font-semibold rounded-xl transition-colors"
        >
          ← Return Home
        </Link>
      </div>
    </div>
  );
}
