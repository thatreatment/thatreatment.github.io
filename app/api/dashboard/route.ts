import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    aum: 420,
    yield: 21.4,
    sharpe: 1.87,
    spotToken: 7.2,
    futures: 6.1,
    geo: 4.3,
    defi: 3.8,
    performance: [
      { month: "Jan", value: 100 },
      { month: "Feb", value: 104 },
      { month: "Mar", value: 109 },
      { month: "Apr", value: 114 },
      { month: "May", value: 121 },
      { month: "Jun", value: 128 },
    ],
  });
}
