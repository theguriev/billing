import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const authPaths = new Set([
  "/auth",
  "/auth/registration",
  "/auth/forgot-password",
]);

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/app")) {
    const accessToken = request.cookies.get("accessToken")?.value || "";
    const refreshToken = request.cookies.get("refreshToken")?.value;
    try {
      await jwtVerify(
        accessToken,
        new TextEncoder().encode(process.env.SECRET || "")
      );
      return NextResponse.next();
    } catch (error) {
      if (refreshToken) {
        return NextResponse.redirect(new URL("/api/auth/refresh", request.url));
      }
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }
  if (authPaths.has(request.nextUrl.pathname)) {
    const accessToken = request.cookies.get("accessToken")?.value || "";
    try {
      await jwtVerify(
        accessToken,
        new TextEncoder().encode(process.env.SECRET || "")
      );
      return NextResponse.redirect(new URL("/app", request.url));
    } catch (error) {
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
