import type { NextRequest } from 'next/server'
import { t3Middleware } from '@t3headless/next-typo3'

export default async function middleware(request: NextRequest) {
  // Process the request using t3Middleware and return the response
  return t3Middleware(request)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|dev_proxy).*)', // Exclude specific paths from middleware
  ],
}
// you can also use t3MiddlewareConfig
// export const config = t3MiddlewareConfig
