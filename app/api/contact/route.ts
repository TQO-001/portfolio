import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Server misconfiguration: missing API key." },
        { status: 500 }
      );
    }

    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "thulanilanga001@gmail.com",
      subject: subject || `New message from ${name}`,
      replyTo: email, // ✅ FIXED
      html: `
        <div style="font-family: monospace;">
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (response.error) {
      return NextResponse.json(
        { error: response.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch {
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}