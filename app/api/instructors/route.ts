import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseUrl.startsWith("https://")) {
    return NextResponse.json(
      {
        success: false,
        error: "NEXT_PUBLIC_SUPABASE_URL eksik veya hatalı",
        items: [],
      },
      { status: 500 }
    );
  }

  if (!serviceKey) {
    return NextResponse.json(
      {
        success: false,
        error: "SUPABASE_SERVICE_ROLE_KEY eksik",
        items: [],
      },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceKey);

  const { data, error } = await supabase
    .from("Instructor")
    .select("id, fullName, title, createdAt")
    .order("createdAt", { ascending: false });

  if (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        items: [],
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    items: data ?? [],
  });
}