import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/app")) {
    const privateKey = request.cookies.get("privateKey")?.value;
    if (!privateKey) {
      return NextResponse.redirect(new URL("/wallet", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/blls")) {
    const privateKey = request.cookies.get("privateKey")?.value;
    if (!privateKey) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
