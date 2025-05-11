import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add security headers
  const headers = new Headers(request.headers)
  const response = NextResponse.next({
    request: {
      headers,
    },
  })

  // Add security headers
  response.headers.set("X-DNS-Prefetch-Control", "on")
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()")

  // Add CSP header
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.google.com; frame-src *.youtube.com *.google.com; style-src 'self' 'unsafe-inline' *.googleapis.com; img-src 'self' data: blob: *.vercel-storage.com; font-src 'self' data: *.googleapis.com *.gstatic.com; connect-src 'self' *.vercel-storage.com;",
  )

  return response
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}

