"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function ArbitrageSimulator() {
  const [capital, setCapital] = useState(1_000_000);
  const [yieldRate, setYieldRate] = useState(22);

  const projected = useMemo(() => capital * (1 + yieldRate / 100), [capital, yieldRate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="vault-panel rounded-2xl p-8 md:p-10 mt-10"
    >
      <h2 className="text-2xl text-gold mb-6">Arbitrage Yield Simulator</h2>

      <div className="grid gap-4">
        <label className="text-sm text-gray-400">Capital Deployment (USD)</label>
        <input
          type="number"
          value={capital}
          onChange={(event) => setCapital(Number(event.target.value) || 0)}
          className="w-full p-3 bg-[#0B0F14] border border-gray-700 rounded-xl"
          min={0}
        />

        <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
          <span>Projected Yield Rate</span>
          <span className="text-gold font-mono">{yieldRate}%</span>
        </div>
        <input
          type="range"
          min="10"
          max="30"
          value={yieldRate}
          onChange={(event) => setYieldRate(Number(event.target.value))}
          className="w-full"
        />

        <p className="mt-4 text-gray-300">
          Projected Annual Return:{" "}
          <span className="text-gold font-mono text-lg">${projected.toLocaleString()}</span>
        </p>
      </div>
    </motion.div>
  );
}
