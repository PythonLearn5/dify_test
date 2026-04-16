import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-routing-demo", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: "/routing-examples/:path*",
};
