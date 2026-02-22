"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

type MetalsPayload = {
  updatedAt?: string;
  metals?: {
    gold: number | null;
    silver: number | null;
    platinum: number | null;
    palladium: number | null;
  };
};

export default function GoldTicker() {
  const [prices, setPrices] = useState<MetalsPayload["metals"] | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  useEffect(() => {
    let active = true;

    const load = async () => {
      setStatus("loading");
      try {
        const res = await fetch("/api/metals", { cache: "no-store" });
        if (!res.ok) {
          throw new Error("Failed to load metals data");
        }
        const data = (await res.json()) as MetalsPayload;
        if (active) {
          setPrices(data.metals ?? null);
          setUpdatedAt(data.updatedAt ?? null);
          setStatus("idle");
        }
      } catch {
        if (active) {
          setStatus("error");
        }
      }
    };

    load();
    const timer = setInterval(load, 30000);

    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);

  const metalRows = [
    { label: "Gold (XAU)", value: prices?.gold, color: "text-[#E6C46A]" },
    { label: "Silver (XAG)", value: prices?.silver, color: "text-[#9EA9B1]" },
    { label: "Platinum (XPT)", value: prices?.platinum, color: "text-gray-200" },
    { label: "Palladium (XPD)", value: prices?.palladium, color: "text-gray-100" },
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <p className="text-sm text-gray-400">Live Precious Metals Spot Prices</p>
          <p className="text-xs text-gray-500 mt-2">Auto-refresh every 30 seconds.</p>
        </div>
        <p className="text-xs text-gray-500">
          {updatedAt ? `Last update: ${new Date(updatedAt).toLocaleTimeString()}` : "Awaiting first quote..."}
        </p>
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-300">Live pricing is currently unavailable.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metalRows.map((metal) => (
            <div key={metal.label} className="rounded-xl border border-white/10 p-4 bg-white/5">
              <p className="text-xs text-gray-400">{metal.label}</p>
              <p className={`text-2xl font-mono mt-2 ${metal.color}`}>
                {typeof metal.value === "number" ? formatter.format(metal.value) : "--"}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="text-sm text-gray-300 max-w-2xl">
        Quotes are normalized from a live metals API feed and displayed as USD spot estimates.
      </div>
    </div>
  );
}
