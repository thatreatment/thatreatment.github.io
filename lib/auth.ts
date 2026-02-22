import jwt from "jsonwebtoken";

type InvestorToken = {
  role?: string;
  iat?: number;
  exp?: number;
};

export function verifyInvestorToken(token?: string): InvestorToken | null {
  if (!token || !process.env.JWT_SECRET) {
    return null;
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET) as InvestorToken;
  } catch (error) {
    return null;
  }
}
