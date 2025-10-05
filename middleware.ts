import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Simple passthrough - no i18n routing
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}
