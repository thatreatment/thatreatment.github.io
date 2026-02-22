"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import ArbitrageSimulator from "@/components/ArbitrageSimulator";

type DashboardMetrics = {
  aum: number;
  yield: number;
  sharpe: number;
  spotToken: number;
  futures: number;
  geo: number;
  defi: number;
  performance: Array<{ month: string; value: number }>;
};

export default function InvestorDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data: DashboardMetrics) => setMetrics(data))
      .catch(() => setMetrics(null));
  }, []);

  if (!metrics) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen relative vault-texture text-white p-6 md:p-10 overflow-hidden">
      <div className="particle-layer" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-3xl text-gold font-bold mb-10">Institutional Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard title="AUM" value={`$${metrics.aum}M`} />
          <MetricCard title="Net Yield YTD" value={`${metrics.yield}%`} />
          <MetricCard title="Sharpe Ratio" value={metrics.sharpe.toString()} />
        </div>

        <div className="mt-10 vault-panel rounded-2xl p-6 md:p-8">
          <h2 className="text-xl mb-4 text-gold">Performance Curve</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metrics.performance}>
                <CartesianGrid stroke="#2b3642" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ background: "#111827", border: "1px solid #374151", borderRadius: "12px" }}
                />
                <Line type="monotone" dataKey="value" stroke="#E6C46A" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-10 vault-panel rounded-2xl p-8">
          <h2 className="text-xl mb-6 text-gold">Arbitrage Spread Breakdown</h2>
          <ul className="space-y-3 text-gray-300">
            <li>Spot–Token: {metrics.spotToken}%</li>
            <li>Futures Convergence: {metrics.futures}%</li>
            <li>Geographic Spread: {metrics.geo}%</li>
            <li>DeFi Yield: {metrics.defi}%</li>
          </ul>
        </div>

        <ArbitrageSimulator />
      </div>
    </div>
  );
}

type MetricCardProps = {
  title: string;
  value: string;
};

function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div className="vault-panel rounded-2xl p-8 border border-gray-800 hover-lift">
      <p className="text-gray-400">{title}</p>
      <p className="text-3xl font-mono text-gold mt-2">{value}</p>
    </div>
  );
}
