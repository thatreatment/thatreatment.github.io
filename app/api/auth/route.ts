import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function isPasswordValid(inputPassword: string, configuredPassword: string) {
  const normalizedInput = inputPassword.trim();
  const normalizedConfigured = configuredPassword.trim();

  if (normalizedConfigured.startsWith("$2a$") || normalizedConfigured.startsWith("$2b$") || normalizedConfigured.startsWith("$2y$")) {
    return bcrypt.compare(normalizedInput, normalizedConfigured);
  }

  return normalizedInput === normalizedConfigured;
}

export async function POST(req: Request) {
  const body = await req.json();
  const password = typeof body?.password === "string" ? body.password : "";
  const jwtSecret = process.env.JWT_SECRET;
  const investorPassword = process.env.INVESTOR_PASSWORD;

  if (!jwtSecret || !investorPassword) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const valid = await isPasswordValid(password, investorPassword);

  if (!valid) {
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
