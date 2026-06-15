import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { renderContactEmail } from "@/components/Templates/EmailTemplate";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req: Request) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.MAIL_TO ?? "info@kometa-power.com";

  if (!host || !user || !pass) {
    console.error("[send] SMTP not configured (need SMTP_HOST, SMTP_USER, SMTP_PASS)");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    !isNonEmptyString(payload.name) ||
    !isNonEmptyString(payload.email) ||
    !isNonEmptyString(payload.message)
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { name, email, message } = payload;
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const html = renderContactEmail({ name, email, message });
  const text =
    `Neue Kontaktanfrage\n\n` +
    `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}\n`;

  try {
    const info = await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text,
      html,
    });
    return NextResponse.json(
      { message: "success", id: info.messageId },
      { status: 200 },
    );
  } catch (error) {
    const err = error as Error & { code?: string; response?: string };
    console.error("[send] SMTP error:", err);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: {
          message: err.message,
          code: err.code,
          response: err.response,
        },
      },
      { status: 500 },
    );
  }
}
