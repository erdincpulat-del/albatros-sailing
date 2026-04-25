import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("Instructor")
      .select("*")
      .order("createdAt", { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      items: data,
    });
  } catch (error) {
    console.error("GET /api/instructors error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Instructorlar alınamadı",
        items: [],
      },
      { status: 500 }
    );
  }
}