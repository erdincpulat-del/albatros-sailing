import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file || file.size === 0) {
      return NextResponse.json(
        { success: false, error: "No file was uploaded." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const safeName = file.name.replace(/\s+/g, "-");
    const fileName = `${Date.now()}-${safeName}`;

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "students"
    );

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      url: `/uploads/students/${fileName}`,
    });
  } catch (error) {
    console.error("POST /api/upload_photo error:", error);

    return NextResponse.json(
      { success: false, error: "Upload failed." },
      { status: 500 }
    );
  }
}