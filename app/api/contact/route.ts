import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const crmForwardEnabled = process.env.CRM_FORWARD_ENABLED === "true";

  if (!webhookUrl) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  let body: {
    name?: string;
    email?: string;
    firm?: string;
    role?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body?.email || !body?.name) {
    return NextResponse.json({ error: "Invalid" }, { status: 400 });
  }

  const payload = {
    username: "Website Contact Form",
    embeds: [
      {
        title: "New Contact Request",
        color: 15123562,
        fields: [
          { name: "Name", value: body.name || "N/A", inline: true },
          { name: "Email", value: body.email || "N/A", inline: true },
          { name: "Firm", value: body.firm || "N/A", inline: true },
          { name: "Role", value: body.role || "N/A", inline: true },
          { name: "Message", value: body.message || "N/A", inline: false },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  const discordRes = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!discordRes.ok) {
    const errorText = await discordRes.text();
    return NextResponse.json(
      { error: "Failed to deliver message", details: errorText },
      { status: 502 }
    );
  }

  if (crmForwardEnabled) {
    const origin = new URL(req.url).origin;
    const crmRes = await fetch(`${origin}/api/crm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        fund: body.firm,
        role: body.role,
        message: body.message,
      }),
    });

    if (!crmRes.ok) {
      const crmError = await crmRes.text();
      return NextResponse.json(
        { error: "Delivered to Discord but failed CRM forwarding", details: crmError },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ success: true });
}
