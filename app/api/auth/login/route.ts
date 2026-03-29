import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

function signSessionValue(value: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const username = String(body.username || "").trim();
    const password = String(body.password || "").trim();

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;

    if (!adminUsername || !adminPassword || !sessionSecret) {
      return NextResponse.json(
        {
          success: false,
          error: "Sunucu admin ayarları eksik",
        },
        { status: 500 }
      );
    }

    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          error: "Kullanıcı adı ve şifre gerekli",
        },
        { status: 400 }
      );
    }

    if (username !== adminUsername || password !== adminPassword) {
      await prisma.adminLog.create({
        data: {
          action: "LOGIN_FAILED",
          targetType: "SESSION",
          targetId: username || "unknown",
          details: `Başarısız giriş denemesi: ${username || "unknown"}`,
        },
      });

      return NextResponse.json(
        {
          success: false,
          error: "Kullanıcı adı veya şifre hatalı",
        },
        { status: 401 }
      );
    }

    const expiresAt = Date.now() + 1000 * 60 * 60 * 12;
    const payload = `${username}|${expiresAt}`;
    const signature = signSessionValue(payload, sessionSecret);
    const sessionValue = `${payload}|${signature}`;

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("albatros_admin_session", sessionValue, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(expiresAt),
    });

    await prisma.adminLog.create({
      data: {
        action: "LOGIN",
        targetType: "SESSION",
        targetId: username,
        details: `${username} admin girişi yaptı`,
      },
    });

    return response;
  } catch (error) {
    console.error("login error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Giriş yapılamadı",
      },
      { status: 500 }
    );
  }
}