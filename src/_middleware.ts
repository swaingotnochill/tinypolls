import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("Request", request.cookies)

  // return NextResponse.redirect(new URL('/CreatePoll', request.url))
  if( request.cookies.get("userCookie")) return


  const random = Math.random().toString(36).substring(2, 15) +
                  Math.random().toString(36).substring(2, 15)
  const res = NextResponse.next()
  res.cookies.set("userCookie", random, { sameSite: "strict"})
  return res
}

// See "Matching Paths" in the Next.js docs for more info
export const config = {
  matcher: '/',
}