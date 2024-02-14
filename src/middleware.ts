import { type NextRequest, NextResponse } from 'next/server'
const isLoggedIn = false

export function middleware(request: NextRequest) {
    if (!isLoggedIn) return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}

export const config = {
    matcher: ['/profiles', '/elephant'],
}
