import { NextResponse } from 'next/server';

const COINGECKO = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true';
const GOLDPRICE = 'https://data-asg.goldprice.org/dbXRates/USD';

export async function GET() {
  try {
    // fetch crypto prices
    const [cgRes, goldRes] = await Promise.allSettled([
      fetch(COINGECKO),
      fetch(GOLDPRICE),
    ]);

    const crypto: any[] = [];
    const metals: any[] = [];

    if (cgRes.status === 'fulfilled' && cgRes.value.ok) {
      const cg = await cgRes.value.json();
      if (cg.bitcoin) crypto.push({ id: 'bitcoin', symbol: 'BTC', price: cg.bitcoin.usd, change24h: cg.bitcoin.usd_24h_change });
      if (cg.ethereum) crypto.push({ id: 'ethereum', symbol: 'ETH', price: cg.ethereum.usd, change24h: cg.ethereum.usd_24h_change });
    }

    if (goldRes.status === 'fulfilled' && goldRes.value.ok) {
      try {
        const g = await goldRes.value.json();
        // goldprice returns items in items[0].xauPrice? provide safe parsing and fallback
        if (g && g.items && g.items[0]) {
          const item = g.items[0];
          if (item && item.xauPrice) metals.push({ id: 'gold', symbol: 'XAU', price: Number(item.xauPrice) });
          if (item && item.xagPrice) metals.push({ id: 'silver', symbol: 'XAG', price: Number(item.xagPrice) });
        }
      } catch (e) {
        // ignore parse errors
      }
    }

    // Fallback sample data if external calls failed
    if (crypto.length === 0) {
      crypto.push({ id: 'bitcoin', symbol: 'BTC', price: 60000, change24h: 0.5 });
      crypto.push({ id: 'ethereum', symbol: 'ETH', price: 3500, change24h: -1.2 });
    }
    if (metals.length === 0) {
      metals.push({ id: 'gold', symbol: 'XAU', price: 1950.12 });
      metals.push({ id: 'silver', symbol: 'XAG', price: 23.45 });
    }

    const payload = {
      lastUpdated: new Date().toISOString(),
      crypto,
      metals,
    };

    return NextResponse.json(payload, {
      status: 200,
      headers: { 'Cache-Control': 'public, s-maxage=43200, stale-while-revalidate=3600' }, // cache 12 hours
    });
  } catch (err) {
    const fallback = {
      lastUpdated: new Date().toISOString(),
      crypto: [
        { id: 'bitcoin', symbol: 'BTC', price: 60000, change24h: 0.5 },
        { id: 'ethereum', symbol: 'ETH', price: 3500, change24h: -1.2 },
      ],
      metals: [
        { id: 'gold', symbol: 'XAU', price: 1950.12 },
        { id: 'silver', symbol: 'XAG', price: 23.45 },
      ],
    };
    return NextResponse.json(fallback, { status: 200 });
  }
}
