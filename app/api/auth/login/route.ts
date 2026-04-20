import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const username = body.username;
    const password = body.password;

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Kullanıcı adı ve şifre gerekli" },
        { status: 400 }
      );
    }

    if (username !== adminUsername || password !== adminPassword) {
      return NextResponse.json(
        { success: false, error: "Kullanıcı adı veya şifre hatalı" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("albatros_admin_session", "ok", {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Giriş yapılamadı" },
      { status: 500 }
    );
  }
}