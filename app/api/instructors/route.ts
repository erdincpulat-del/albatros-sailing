import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function GET() {
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