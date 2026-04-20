import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = req.cookies.get("albatros_admin_session")?.value;
  const loggedIn = session === "ok";

  if (pathname.startsWith("/login") && loggedIn) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (pathname.startsWith("/admin") && !loggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (
    pathname.startsWith("/api/certificates/create") ||
    pathname.startsWith("/api/export-pdf") ||
    pathname.startsWith("/api/reservations") ||
    pathname.startsWith("/api/upload-photo") ||
    pathname.startsWith("/api/admin-logs")
  ) {
    if (!loggedIn) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}