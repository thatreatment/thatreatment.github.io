import { NextResponse } from "next/server";
import { Client } from "@hubspot/api-client";

type LeadPayload = {
  email?: string;
  name?: string;
  fund?: string;
  role?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: LeadPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.email || !body.name) {
    return NextResponse.json({ error: "name and email are required" }, { status: 400 });
  }

  const hubspotKey = process.env.HUBSPOT_KEY;
  const salesforceEndpoint = process.env.SALESFORCE_ENDPOINT;
  const salesforceToken = process.env.SALESFORCE_TOKEN;

  if (!hubspotKey && !(salesforceEndpoint && salesforceToken)) {
    return NextResponse.json({ error: "No CRM integration configured" }, { status: 500 });
  }

  const delivered: string[] = [];
  const errors: string[] = [];

  if (hubspotKey) {
    try {
      const hubspot = new Client({ accessToken: hubspotKey });
      await hubspot.crm.contacts.basicApi.create({
        properties: {
          email: body.email,
          firstname: body.name,
          company: body.fund || "Unknown",
          jobtitle: body.role || "Unknown",
        },
      });
      delivered.push("hubspot");
    } catch {
      errors.push("hubspot delivery failed");
    }
  }

  if (salesforceEndpoint && salesforceToken) {
    try {
      const salesforceRes = await fetch(salesforceEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${salesforceToken}`,
        },
        body: JSON.stringify({
          email: body.email,
          name: body.name,
          company: body.fund || "Unknown",
          title: body.role || "Unknown",
          description: body.message || "",
          source: "goldun.com",
        }),
      });

      if (!salesforceRes.ok) {
        errors.push("salesforce delivery failed");
      } else {
        delivered.push("salesforce");
      }
    } catch {
      errors.push("salesforce delivery failed");
    }
  }

  if (delivered.length === 0) {
    return NextResponse.json({ error: "CRM delivery failed", details: errors }, { status: 502 });
  }

  return NextResponse.json({ success: true, delivered, warnings: errors });
}
