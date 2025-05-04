import { EmailTemplate } from "@/components/Templates/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: '"📨 Kometa Power" <onboarding@resend.dev>',
      to: "kometa-power@gmx.de",
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Email sending error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data, message: "success" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
