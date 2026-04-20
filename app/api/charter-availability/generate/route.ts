import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function getSaturdays(year: number) {
  const dates: Date[] = [];
  const date = new Date(`${year}-01-01`);

  while (date.getFullYear() === year) {
    if (date.getDay() === 6) {
      dates.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { boatId, year } = body;

    if (!boatId) {
      return NextResponse.json(
        { success: false, error: "boatId gerekli" },
        { status: 400 }
      );
    }

    const targetYear = Number(year) || new Date().getFullYear();

    const saturdays = getSaturdays(targetYear);

    let createdCount = 0;

    for (const start of saturdays) {
      const end = new Date(start);
      end.setDate(start.getDate() + 6);

      const exists = await prisma.charterAvailability.findFirst({
        where: {
          boatId,
          startDate: start,
          endDate: end,
        },
      });

      if (exists) continue;

      await prisma.charterAvailability.create({
        data: {
          boatId,
          weekLabel: `${start.toLocaleDateString("tr-TR")} - ${end.toLocaleDateString("tr-TR")}`,
          startDate: start,
          endDate: end,
          status: "AVAILABLE",
        },
      });

      createdCount++;
    }

    return NextResponse.json({
      success: true,
      created: createdCount,
    });
  } catch (error) {
    console.error("GENERATE AVAILABILITY ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Oluşturulamadı" },
      { status: 500 }
    );
  }
}