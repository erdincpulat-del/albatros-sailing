import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

function isValidImageType(type: string) {
  return ["image/jpeg", "image/png", "image/webp"].includes(type);
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "Dosya bulunamadı." },
        { status: 400 }
      );
    }

    if (!isValidImageType(file.type)) {
      return NextResponse.json(
        { error: "Sadece JPG, PNG veya WEBP yükleyebilirsin." },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Dosya çok büyük. Maksimum 5MB olmalı." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `boat-${Date.now()}.${ext}`;

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      "charter"
    );

    await mkdir(uploadDir, { recursive: true });

    const fullPath = path.join(uploadDir, fileName);
    await writeFile(fullPath, buffer);

    const url = `/uploads/charter/${fileName}`;

    return NextResponse.json({ url });
  } catch (error) {
    console.error("POST /api/admin/charter/upload error:", error);
    return NextResponse.json(
      { error: "Upload başarısız." },
      { status: 500 }
    );
  }
}