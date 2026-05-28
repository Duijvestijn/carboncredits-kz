import { redirect } from "next/navigation";

/**
 * Root route "/" — redirect to the default language.
 * The proxy (src/proxy.ts) handles Accept-Language detection for browsers;
 * this is a fallback for direct Next.js navigation (e.g. <Link href="/">).
 */
export default function RootPage() {
  redirect("/en");
}
