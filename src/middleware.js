import { NextResponse } from "next/server"

export function middleware(request) {
    const response = NextResponse.next()
    const url = request.nextUrl;
    const pathname = url.pathname;
    if (pathname === 'authentication/login' || pathname === 'authentication/register') {
        return response; // Allow access without authentication
    }
    const user = ''

    if (!user) {
        return NextResponse.redirect(
            new URL('/authentication/login', request.url)
        )
    }



    return NextResponse.next()
}

export const config = {
    matcher: ['/']
}