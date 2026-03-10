// middleware.js
import { NextResponse } from 'next/server'

const rateLimit = new Map()

export function middleware(request) {
  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.ip || 'anonymous'
    const now = Date.now()
    const windowMs = 60 * 1000 // 1 minute
    const maxRequests = 30 // 30 requests per minute
    
    const requestLog = rateLimit.get(ip) || []
    const requestsInWindow = requestLog.filter(time => now - time < windowMs)
    
    if (requestsInWindow.length >= maxRequests) {
      return new NextResponse('Too Many Requests', { 
        status: 429,
        headers: {
          'Retry-After': '60',
          'Content-Type': 'text/plain'
        }
      })
    }
    
    requestsInWindow.push(now)
    rateLimit.set(ip, requestsInWindow)
    
    // Clean up old entries
    if (rateLimit.size > 10000) {
      for (const [ip, times] of rateLimit.entries()) {
        const validTimes = times.filter(time => now - time < windowMs)
        if (validTimes.length === 0) {
          rateLimit.delete(ip)
        } else {
          rateLimit.set(ip, validTimes)
        }
      }
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}