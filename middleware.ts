import { NextRequest, NextResponse } from "next/server";

function isValidSession(session?: string) {
  if (!session) return false;

  const parts = session.split("|");
  if (parts.length !== 3) return false;

  const username = parts[0];
  const expires = Number(parts[1]);

  if (!username || !expires) return false;

  if (Date.now() > expires) return false;

  return true;
}

export function middleware(req: NextRequest) {

  const { pathname } = req.nextUrl;

  const session = req.cookies.get("albatros_admin_session")?.value;

  const loggedIn = isValidSession(session);

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

export const config = {
  matcher: [
    "/admin/:path*",
    "/login",
    "/api/certificates/create",
    "/api/export-pdf",
    "/api/reservations/:path*",
    "/api/admin-logs",
  ],
};