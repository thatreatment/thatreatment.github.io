import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.metals.live/v1/spot/gold", {
      next: { revalidate: 60 },
    });
    const data = await res.json();

    let price: number | null = null;
    if (Array.isArray(data) && data.length > 0) {
      const first = data[0];
      if (typeof first?.price === "number") {
        price = first.price;
      } else if (Array.isArray(first) && typeof first[1] === "number") {
        price = first[1];
      }
    }

    return NextResponse.json(
      { price },
      { headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate=300" } }
    );
  } catch (error) {
    return NextResponse.json({ price: null }, { status: 200 });
  }
}
