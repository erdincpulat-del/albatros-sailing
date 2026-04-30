import { NextResponse } from "next/server";

/*
========================================
TEMP CHARTER API (STABLE - NO DATABASE)
========================================
*/

export async function GET() {
  return NextResponse.json({
    success: true,
    boats: [],
  });
}

export async function POST() {
  return NextResponse.json({
    success: false,
    error: "Charter sistemi henüz aktif değil",
  });
}