import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function getAllSaturdays(year: number) {
  const dates: Date[] = [];

  let date = new Date(year, 0, 1);

  while (date.getDay() !== 6) {
    date.setDate(date.getDate() + 1);
  }

  while (date.getFullYear() === year) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 7);
  }

  return dates;
}

async function main() {
  const boats = await prisma.charterBoat.findMany();

  if (boats.length === 0) {
    console.log("⚠️ Önce tekne eklemelisin");
    return;
  }

  const saturdays = getAllSaturdays(2026);

  for (const boat of boats) {
    for (const start of saturdays) {
      const end = new Date(start);
      end.setDate(end.getDate() + 6); // Cumartesi → Cuma

      await prisma.charterAvailability.create({
        data: {
          boatId: boat.id,
          startDate: start,
          endDate: end,
          status: "AVAILABLE",
          inquiryCount: 0,
          weekLabel: `${start.toLocaleDateString("tr-TR")} - ${end.toLocaleDateString("tr-TR")}`
        },
      });
    }
  }

  console.log("🔥 Haftalar oluşturuldu");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());