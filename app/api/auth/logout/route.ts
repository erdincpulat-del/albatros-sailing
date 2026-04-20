import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const sessionValue =
      req.cookies.get("albatros_admin_session")?.value || "";

    const username = sessionValue.split("|")[0] || "unknown";

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("albatros_admin_session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });

    await prisma.adminLog.create({
      data: {
        action: "LOGOUT",
        targetType: "SESSION",
        targetId: username,
        details: `${username} admin çıkışı yaptı`,
      },
    });

    return response;
  } catch (error) {
    console.error("logout error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Çıkış yapılamadı",
      },
      { status: 500 }
    );
  }
}