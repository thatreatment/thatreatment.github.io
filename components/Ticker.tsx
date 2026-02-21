'use client'
import { useEffect, useState } from 'react';

type CryptoTick = { id: string; symbol: string; price: number; change24h?: number };
type MetalTick = { id: string; symbol: string; price: number };

export default function Ticker() {
  const [loading, setLoading] = useState(true);
  const [crypto, setCrypto] = useState<CryptoTick[]>([]);
  const [metals, setMetals] = useState<MetalTick[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch('/api/tickers');
        const data = await res.json();
        if (!mounted) return;
        setCrypto(data.crypto || []);
        setMetals(data.metals || []);
        setLastUpdated(data.lastUpdated || null);
      } catch (e) {
        console.error('Ticker fetch failed', e);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => { mounted = false };
  }, []);

  if (loading) return <div className="text-sm text-slate-300">Loading prices…</div>;

  return (
    <div className="flex items-center gap-6 text-sm">
      <div className="flex items-center gap-4">
        {metals.map((m) => (
          <div key={m.id} className="text-slate-300">
            <span className="text-slate-400">{m.symbol}</span> <span className="font-medium text-gold">${m.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {crypto.map((c) => (
          <div key={c.id} className="text-slate-300">
            <span className="text-slate-400 uppercase">{c.symbol}</span>{' '}
            <span className="font-medium">${c.price.toLocaleString()}</span>
            {typeof c.change24h === 'number' && (
              <span className={`ml-2 ${c.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>{c.change24h >= 0 ? '▲' : '▼'} {Math.abs(c.change24h).toFixed(2)}%</span>
            )}
          </div>
        ))}
      </div>

      {lastUpdated && <div className="text-slate-500">Updated {new Date(lastUpdated).toLocaleString()}</div>}
    </div>
  );
}
