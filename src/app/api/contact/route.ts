import { NextRequest, NextResponse } from "next/server";

/** Escape HTML special characters to prevent XSS in email templates */
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, org, type, message } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (!message || String(message).trim().length < 5) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CarbonCredits.kz <noreply@carboncredits.kz>",
          to: ["info@carboncredits.kz"],
          subject: `Contact Form — ${esc(type || "General")} — ${esc(name || email)}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${esc(name || "—")}</p>
            <p><strong>Email:</strong> ${esc(email)}</p>
            <p><strong>Organisation:</strong> ${esc(org || "—")}</p>
            <p><strong>Type:</strong> ${esc(type || "—")}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${esc(message || "").replace(/\n/g, "<br />")}</p>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text().catch(() => "unknown");
        console.error("Resend API error:", resendRes.status, errText);
        return NextResponse.json(
          { ok: false, error: "Failed to deliver message" },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal error" },
      { status: 500 }
    );
  }
}
