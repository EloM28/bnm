import { NextResponse } from "next/server"
import { unstable_getServerSession } from 'next-auth/next';

export async function middleware(request) {
    const response = NextResponse.next()
    const url = request.nextUrl;
    const pathname = url.pathname;
    if (pathname === 'authentication/login' || pathname === 'authentication/register') {
        return response; // Allow access without authentication
    }
    const session = await unstable_getServerSession(req, res, authOptions);

    if (!session) {
        return NextResponse.redirect(
            new URL('/authentication/login', request.url)
        )
    }



    return NextResponse.next()
}

export const config = {
    matcher: ['/']
}