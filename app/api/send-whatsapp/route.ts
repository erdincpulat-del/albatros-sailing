import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, phone, program } = body;

  const message = `
Yeni Talep 🚀

İsim: ${fullName}
Telefon: ${phone}
Program: ${program}
`;

  try {
    const res = await fetch(
      "https://graph.facebook.com/v19.0/PHONE_NUMBER_ID/messages",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: "905324873813", // kendi numaran
          type: "text",
          text: {
            body: message,
          },
        }),
      }
    );

    const data = await res.json();

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ success: false, err });
  }
}