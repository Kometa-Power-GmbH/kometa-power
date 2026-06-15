import { EmailTemplate } from "@/components/Templates/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[send] RESEND_API_KEY is missing");
    return NextResponse.json(
      { error: "Email service not configured (missing RESEND_API_KEY)" },
      { status: 500 },
    );
  }

  try {
    const { name, email, message } = await req.json();
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: '"Kometa Power" <onboarding@resend.dev>',
      to: "info@kometa-power.com",
      replyTo: email,
      subject: "Neue Kontaktanfrage von Kometa Power",
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      console.error("[send] Resend error:", error);
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: {
            name: error.name,
            message: error.message,
          },
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ data, message: "success" }, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error("[send] Unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to send email", details: { message: err.message } },
      { status: 500 },
    );
  }
}
