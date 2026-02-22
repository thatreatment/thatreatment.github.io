"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 relative overflow-hidden hero-backdrop">
      <div className="absolute inset-0 bg-[#0B0F14]/65" />
      <div className="absolute inset-0 hero-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400">Institutional Infrastructure</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            DIGITAL GOLD.
            <span className="text-[#E6C46A] block">REAL YIELD.</span>
            INSTITUTIONAL ARBITRAGE.
          </h1>
          <p className="mt-6 text-gray-400 max-w-xl">
            Structured arbitrage across global gold markets and tokenized assets with
            compliance-first custody and verified reserves.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#E6C46A] text-[#0B0F14] font-semibold"
            >
              Request Briefing
            </a>
            <a
              href="#engine"
              className="px-6 py-3 rounded-full border border-[#E6C46A] text-[#E6C46A] font-semibold"
            >
              Explore Engine
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-panel rounded-2xl p-8 border border-[#E6C46A]/15"
        >
          <h2 className="text-xl font-semibold">Goldun Engine</h2>
          <p className="text-gray-400 mt-3">
            Systematic execution across spot, futures, and tokenized markets with
            capital preservation as the first principle.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <div className="p-4 rounded-xl bg-[#1F2933]">
              <p className="text-gray-400">Latency</p>
              <p className="text-[#E6C46A] text-lg font-semibold">&lt; 40ms</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1F2933]">
              <p className="text-gray-400">Markets</p>
              <p className="text-[#E6C46A] text-lg font-semibold">24/7</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1F2933]">
              <p className="text-gray-400">Coverage</p>
              <p className="text-[#E6C46A] text-lg font-semibold">Global</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1F2933]">
              <p className="text-gray-400">Audit</p>
              <p className="text-[#E6C46A] text-lg font-semibold">Realtime</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
