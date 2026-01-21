// middleware.ts - URL Canonicalization
// Forces redirect to https://www.avif-heicconverter.info for SEO consistency

import { NextRequest, NextResponse } from 'next/server';

// Production domain configuration
const PRODUCTION_DOMAIN = 'www.avif-heicconverter.info';
const PRODUCTION_PROTOCOL = 'https';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Skip in development
  if (
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1') ||
    hostname.startsWith('192.168.')
  ) {
    return NextResponse.next();
  }

  // Check if redirect is needed
  const isNonWww = hostname === 'avif-heicconverter.info';
  const isHttp = request.headers.get('x-forwarded-proto') === 'http';

  if (isNonWww || isHttp) {
    // Build canonical URL
    const canonicalUrl = new URL(
      `${PRODUCTION_PROTOCOL}://${PRODUCTION_DOMAIN}${url.pathname}${url.search}`
    );

    return NextResponse.redirect(canonicalUrl, {
      status: 301, // Permanent redirect for SEO
    });
  }

  return NextResponse.next();
}

export const config = {
  // Apply to all routes except static files
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};
