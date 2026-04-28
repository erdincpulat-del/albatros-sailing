import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.redirect(
    "https://albatros-sailing.vercel.app/templates/card-back.png"
  );
}