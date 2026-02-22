"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export default function GoldTicker() {
  const [price, setPrice] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  useEffect(() => {
    let active = true;

    const load = async () => {
      setStatus("loading");
      try {
        const res = await fetch("/api/gold");
        const data = await res.json();
        if (active) {
          setPrice(data.price ?? null);
          setStatus("idle");
        }
      } catch (error) {
        if (active) {
          setStatus("error");
        }
      }
    };

    load();
    const timer = setInterval(load, 60000);

    return () => {
      active = false;
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <p className="text-sm text-gray-400">Live Gold Spot</p>
        <p className="text-3xl text-[#E6C46A] font-mono mt-2">
          {status === "error" ? "Unavailable" : price ? formatter.format(price) : "Loading..."}
        </p>
        <p className="text-xs text-gray-500 mt-2">Updated every 60 seconds.</p>
      </div>
      <div className="text-sm text-gray-300 max-w-sm">
        Market pricing sourced from global spot feeds with a rolling liquidity
        aggregation layer.
      </div>
    </div>
  );
}
