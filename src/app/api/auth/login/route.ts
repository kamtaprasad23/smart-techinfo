import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

export async function POST(request: Request) {
  try {
    // Forward incoming request body and cookies to backend
    const body = await request.text();

    const headers: Record<string, string> = {
      'Content-Type': request.headers.get('content-type') || 'application/json',
    };

    // Forward client cookies to backend if present
    const cookie = request.headers.get('cookie');
    if (cookie) headers['cookie'] = cookie;

    const backendRes = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      headers,
      body,
      // allow fetch on server-side to include credentials from backend response
    });

    const resBody = await backendRes.text();

    // Create response and forward backend headers (including set-cookie)
    const response = new NextResponse(resBody, {
      status: backendRes.status,
    });

    // Copy headers from backend response
    backendRes.headers.forEach((value, key) => {
      // Next.js might block certain hop-by-hop headers, but we forward most
      try {
        response.headers.set(key, value);
      } catch (e) {
        // ignore headers that can't be set
      }
    });

    return response;
  } catch (err) {
    return NextResponse.json({ message: 'Proxy error' }, { status: 502 });
  }
}
