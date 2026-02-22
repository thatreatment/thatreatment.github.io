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

const STOOQ_SYMBOL_MAP = {
  gold: "xauusd",
  silver: "xagusd",
  platinum: "xptusd",
  palladium: "xpdusd",
} as const;

function toUsdPerOunce(rate: number | undefined): number | null {
  if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
    return null;
  }

  return Number((1 / rate).toFixed(2));
}

function parseStooqClose(csv: string): number | null {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) {
    return null;
  }

  const values = lines[1].split(",");
  const close = Number(values[6]);
  if (!Number.isFinite(close) || close <= 0) {
    return null;
  }

  return Number(close.toFixed(2));
}

async function fetchFallbackMetalsFromStooq() {
  const symbols = Object.entries(STOOQ_SYMBOL_MAP);

  const quotes = await Promise.all(
    symbols.map(async ([key, symbol]) => {
      const endpoint = `https://stooq.com/q/l/?s=${symbol}&f=sd2t2ohlcv&h&e=csv`;
      const res = await fetch(endpoint, {
        next: { revalidate: 30 },
        signal: AbortSignal.timeout(8000),
      });

      if (!res.ok) {
        return [key, null] as const;
      }

      const csv = await res.text();
      return [key, parseStooqClose(csv)] as const;
    })
  );

  const metals = Object.fromEntries(quotes) as {
    gold: number | null;
    silver: number | null;
    platinum: number | null;
    palladium: number | null;
  };

  return {
    provider: "stooq",
    base: "USD",
    updatedAt: new Date().toISOString(),
    metals,
  };
}

export async function GET() {
  const apiKey = process.env.METALPRICEAPI_KEY;

  try {
    if (apiKey) {
      const endpoint = `https://api.metalpriceapi.com/v1/latest?apikey=${apiKey}&base=USD&currencies=${METAL_SYMBOLS}`;
      const res = await fetch(endpoint, {
        next: { revalidate: 30 },
        signal: AbortSignal.timeout(8000),
      });

      if (res.ok) {
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
      }
    }

    const fallbackPayload = await fetchFallbackMetalsFromStooq();
    return NextResponse.json(fallbackPayload, {
      headers: { "Cache-Control": "s-maxage=30, stale-while-revalidate=60" },
    });
  } catch {
    try {
      const fallbackPayload = await fetchFallbackMetalsFromStooq();
      return NextResponse.json(fallbackPayload, {
        headers: { "Cache-Control": "s-maxage=30, stale-while-revalidate=60" },
      });
    } catch {
      return NextResponse.json(
        { error: "Unable to fetch metal prices right now" },
        { status: 502 }
      );
    }
  }
}