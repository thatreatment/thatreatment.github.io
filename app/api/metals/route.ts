import { NextResponse } from "next/server";

type MetalRatesResponse = {
  success?: boolean;
  rates?: Record<string, number>;
  timestamp?: number;
};

const SYMBOL_MAP = {
  gold: "XAU",
  silver: "XAG",
  platinum: "XPT",
  palladium: "XPD",
} as const;

const METAL_SYMBOLS = Object.values(SYMBOL_MAP).join(",");

function toUsdPerOunce(rate: number | undefined): number | null {
  if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
    return null;
  }

  return Number((1 / rate).toFixed(2));
}

export async function GET() {
  const apiKey = process.env.METALPRICEAPI_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing METALPRICEAPI_KEY" },
      { status: 503 }
    );
  }

  try {
    const endpoint = `https://api.metalpriceapi.com/v1/latest?apikey=${apiKey}&base=USD&currencies=${METAL_SYMBOLS}`;
    const res = await fetch(endpoint, {
      next: { revalidate: 30 },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Upstream metal pricing API request failed" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as MetalRatesResponse;
    const rates = data.rates ?? {};
    const timestampMs = typeof data.timestamp === "number" ? data.timestamp * 1000 : Date.now();

    return NextResponse.json(
      {
        provider: "metalpriceapi",
        base: "USD",
        updatedAt: new Date(timestampMs).toISOString(),
        metals: {
          gold: toUsdPerOunce(rates[SYMBOL_MAP.gold]),
          silver: toUsdPerOunce(rates[SYMBOL_MAP.silver]),
          platinum: toUsdPerOunce(rates[SYMBOL_MAP.platinum]),
          palladium: toUsdPerOunce(rates[SYMBOL_MAP.palladium]),
        },
      },
      { headers: { "Cache-Control": "s-maxage=30, stale-while-revalidate=60" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch metal prices right now" },
      { status: 502 }
    );
  }
}