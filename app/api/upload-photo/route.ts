import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const folderRaw = formData.get("folder");

    const folder =
      typeof folderRaw === "string" && folderRaw.trim()
        ? folderRaw.trim()
        : "students";

    if (!file || file.size === 0) {
      return NextResponse.json(
        { success: false, error: "No file was uploaded." },
        { status: 400 }
      );
    }

    const allowedFolders = ["students", "certificates", "charter"] as const;
    const safeFolder = allowedFolders.includes(
      folder as (typeof allowedFolders)[number]
    )
      ? folder
      : "students";

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name) || ".jpg";
    const baseName = path
      .basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9-_]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const fileName = `${Date.now()}-${baseName}${ext}`;
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      safeFolder
    );
    const filePath = path.join(uploadDir, fileName);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${safeFolder}/${fileName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      photoUrl: publicUrl,
      folder: safeFolder,
      fileName,
    });
  } catch (error) {
    console.error("POST /api/upload_photo error:", error);

    return NextResponse.json(
      { success: false, error: "Upload failed." },
      { status: 500 }
    );
  }
}