import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LANGS = ["en", "ru", "kk"];
const DEFAULT_LANG = "en";

/** Detect preferred language from Accept-Language header */
function getPreferredLang(request: NextRequest): string {
  const header = request.headers.get("accept-language") ?? "";
  if (/\bkk\b|\bkz\b/i.test(header)) return "kk";
  if (/\bru\b/i.test(header)) return "ru";
  return DEFAULT_LANG;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // 1. Redirect carbonunits.kz → carboncredits.kz (301 permanent)
  if (host.includes("carbonunits.kz")) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "carboncredits.kz";
    return NextResponse.redirect(url, { status: 301 });
  }

  const { pathname } = request.nextUrl;

  // 2. Pass through if already prefixed with a supported lang
  const firstSegment = pathname.split("/")[1] ?? "";
  if (SUPPORTED_LANGS.includes(firstSegment)) {
    return NextResponse.next();
  }

  // 3. Redirect bare "/" (and anything else without a lang prefix) to /{lang}/
  const lang = getPreferredLang(request);
  const url = request.nextUrl.clone();
  // Preserve sub-path (e.g. /aral-sea → /en/aral-sea)
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, { status: 302 });
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static assets
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
};
