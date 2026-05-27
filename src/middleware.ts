import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirect carbonunits.kz → carboncredits.kz (301 permanent).
 * Preserves path + query so deep links work if needed.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.includes("carbonunits.kz")) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "carboncredits.kz";
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all routes except Next.js internals and static files.
     * The carbonunits.kz redirect must fire before any page is rendered.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
