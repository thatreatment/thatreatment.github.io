import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  if (!body?.email) {
    return NextResponse.json({ error: "Invalid" }, { status: 400 });
  }

  // Replace with CRM or database integration.
  console.log("Investor Lead:", body);

  return NextResponse.json({ success: true });
}
