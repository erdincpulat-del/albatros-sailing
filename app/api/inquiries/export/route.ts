import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import ExcelJS from "exceljs";

function getLeadLabel(score: number) {
  if (score >= 70) return "HOT";
  if (score >= 40) return "WARM";
  return "COLD";
}

function getLeadColor(score: number) {
  if (score >= 70) return "FFFDE2E2"; // HOT
  if (score >= 40) return "FFFEF3C7"; // WARM
  return "FFF1F5F9"; // COLD
}

export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      include: {
        week: {
          include: {
            boat: true,
          },
        },
        boat: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Inquiries");

    sheet.columns = [
      { header: "Lead", key: "lead", width: 12 },
      { header: "Lead Score", key: "leadScore", width: 12 },
      { header: "Estimated Value (€)", key: "estimatedValue", width: 18 },
      { header: "Type", key: "type", width: 14 },
      { header: "Status", key: "status", width: 14 },
      { header: "Full Name", key: "fullName", width: 24 },
      { header: "Phone", key: "phone", width: 18 },
      { header: "Email", key: "email", width: 28 },
      { header: "Training Program", key: "trainingProgram", width: 24 },
      { header: "Participant Count", key: "participantCount", width: 16 },
      { header: "Week Label", key: "weekLabel", width: 20 },
      { header: "Week Start", key: "weekStart", width: 16 },
      { header: "Week End", key: "weekEnd", width: 16 },
      { header: "Boat", key: "boat", width: 22 },
      { header: "Guest Count", key: "guestCount", width: 14 },
      { header: "Duration Weeks", key: "durationWeeks", width: 16 },
      { header: "Route Preference", key: "routePreference", width: 24 },
      { header: "Skipper Required", key: "skipperRequired", width: 16 },
      { header: "Notes", key: "notes", width: 40 },
      { header: "Created At", key: "createdAt", width: 22 },
    ];

    const headerRow = sheet.getRow(1);
    headerRow.font = {
      bold: true,
      color: { argb: "FFFFFFFF" },
    };
    headerRow.alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0F172A" },
    };

    inquiries.forEach((inquiry) => {
      const leadScore = inquiry.leadScore ?? 0;
      const estimatedValue = inquiry.estimatedValue ?? 0;
      const leadLabel = getLeadLabel(leadScore);
      const leadColor = getLeadColor(leadScore);

      const boatName =
        inquiry.week?.boat?.name ||
        inquiry.boat?.name ||
        "";

      const hasWeek = Boolean(inquiry.week?.weekLabel || inquiry.weekId);

      const row = sheet.addRow({
        lead: leadLabel,
        leadScore,
        estimatedValue,
        type: inquiry.type || "",
        status: inquiry.status || "",
        fullName: inquiry.fullName || "",
        phone: inquiry.phone || "",
        email: inquiry.email || "",
        trainingProgram: inquiry.trainingProgram || "",
        participantCount: inquiry.participantCount ?? "",
        weekLabel: inquiry.week?.weekLabel || "",
        weekStart: inquiry.week?.startDate
          ? new Date(inquiry.week.startDate).toLocaleDateString("tr-TR")
          : "",
        weekEnd: inquiry.week?.endDate
          ? new Date(inquiry.week.endDate).toLocaleDateString("tr-TR")
          : "",
        boat: boatName,
        guestCount: inquiry.guestCount ?? "",
        durationWeeks: inquiry.charterDurationWeeks ?? "",
        routePreference: inquiry.routePreference || "",
        skipperRequired:
          inquiry.skipperRequired === null || inquiry.skipperRequired === undefined
            ? ""
            : inquiry.skipperRequired
              ? "Evet"
              : "Hayır",
        notes: inquiry.notes || "",
        createdAt: inquiry.createdAt
          ? new Date(inquiry.createdAt).toLocaleString("tr-TR")
          : "",
      });

      const leadFill = {
        type: "pattern" as const,
        pattern: "solid" as const,
        fgColor: { argb: leadColor },
      };

      row.getCell("lead").fill = leadFill;
      row.getCell("leadScore").fill = leadFill;
      row.getCell("estimatedValue").fill = leadFill;

      if (hasWeek) {
        const weekFill = {
          type: "pattern" as const,
          pattern: "solid" as const,
          fgColor: { argb: "FFDBEAFE" },
        };

        row.getCell("weekLabel").fill = weekFill;
        row.getCell("weekStart").fill = weekFill;
        row.getCell("weekEnd").fill = weekFill;
      }
    });

    sheet.eachRow((row) => {
      row.eachCell((cell: ExcelJS.Cell) => {
        cell.border = {
          top: { style: "thin", color: { argb: "FFE2E8F0" } },
          left: { style: "thin", color: { argb: "FFE2E8F0" } },
          bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
          right: { style: "thin", color: { argb: "FFE2E8F0" } },
        };
        cell.alignment = {
          vertical: "middle",
          horizontal: "left",
          wrapText: true,
        };
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition":
          'attachment; filename="albatros-inquiries.xlsx"',
      },
    });
  } catch (error) {
    console.error("INQUIRIES EXPORT GET ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Excel export oluşturulamadı.",
      },
      { status: 500 }
    );
  }
}