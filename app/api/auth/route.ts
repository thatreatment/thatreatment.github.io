import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { password } = await req.json();
  const jwtSecret = process.env.JWT_SECRET;
  const investorPassword = process.env.INVESTOR_PASSWORD;

  if (!jwtSecret || !investorPassword) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  if (password !== investorPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = jwt.sign({ role: "investor" }, jwtSecret, { expiresIn: "1h" });
  const response = NextResponse.json({ success: true });

  response.cookies.set("investor_token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  return response;
}
