import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, org, type, message } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CarbonCredits.kz <noreply@carboncredits.kz>",
          to: ["info@carboncredits.kz"],
          subject: `Contact Form — ${type || "General"} — ${name || email}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name || "—"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organisation:</strong> ${org || "—"}</p>
            <p><strong>Type:</strong> ${type || "—"}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${(message || "").replace(/\n/g, "<br />")}</p>
          `,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
