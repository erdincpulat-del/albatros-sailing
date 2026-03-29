import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import { createCanvas, loadImage } from "canvas"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { certificateId } = body

    if (!certificateId) {
      return NextResponse.json(
        { error: "certificateId gerekli" },
        { status: 400 }
      )
    }

    const templatePath = path.join(
      process.cwd(),
      "public",
      "templates",
      "card-back.png"
    )

    if (!fs.existsSync(templatePath)) {
      return NextResponse.json(
        { error: "card-back.png bulunamadı" },
        { status: 500 }
      )
    }

    const template = await loadImage(templatePath)
    const width = template.width
    const height = template.height

    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext("2d")

    ctx.drawImage(template, 0, 0, width, height)

    const outputDir = path.join(process.cwd(), "public", "cards")
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    const fileName = `${certificateId}-back.png`
    const filePath = path.join(outputDir, fileName)

    fs.writeFileSync(filePath, canvas.toBuffer("image/png"))

    return NextResponse.json({
      success: true,
      cardBackUrl: `/cards/${fileName}`,
    })
  } catch (error) {
    console.error("generate-card-back error:", error)

    return NextResponse.json(
      { error: "Kart arka yüzü üretilemedi" },
      { status: 500 }
    )
  }
}