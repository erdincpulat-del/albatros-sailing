import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect("/templates/card-back.png");
}