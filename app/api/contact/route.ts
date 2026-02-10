import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "invalid email address." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? "thulanilanga001@gmail.com",
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: monospace; background: #050505; color: #e4e4e7; padding: 32px; max-width: 600px;">
          <div style="border-left: 2px solid #ea580c; padding-left: 16px; margin-bottom: 24px;">
            <p style="color: #f97316; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 4px;">New Transmission</p>
            <h2 style="color: #ffffff; margin: 0; font-size: 18px;">${subject || "No subject"}</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="color: #71717a; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; padding: 8px 0; border-bottom: 1px solid #27272a; width: 80px;">From</td>
              <td style="color: #ffffff; font-size: 12px; padding: 8px 0 8px 16px; border-bottom: 1px solid #27272a;">${name}</td>
            </tr>
            <tr>
              <td style="color: #71717a; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; padding: 8px 0; border-bottom: 1px solid #27272a;">Email</td>
              <td style="color: #ffffff; font-size: 12px; padding: 8px 0 8px 16px; border-bottom: 1px solid #27272a;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
            </tr>
          </table>
          <div style="background: #18181b; border: 1px solid #27272a; padding: 24px;">
            <p style="color: #71717a; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px;">Message</p>
            <p style="color: #d4d4d8; font-size: 13px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #3f3f46; font-size: 10px; margin-top: 24px; text-transform: uppercase; letter-spacing: 0.1em;">Sent from portfolio.laughtale.co.za</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
