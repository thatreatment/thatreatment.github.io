export default function Capital() {
  return (
    <section id="capital" className="max-w-7xl mx-auto px-6 py-20 section-divider">
      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400">Capital Programs</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Capital deployment with custody-grade transparency.
          </h2>
          <p className="text-gray-400 mt-4">
            We structure capital programs for banks, brokers, and accredited investors seeking
            exposure to arbitrage yields backed by physical metal allocation.
          </p>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• Segregated accounts with third-party custody</li>
            <li>• Monthly reserve attestations and audit reports</li>
            <li>• Flexible redemption windows aligned to liquidity tiers</li>
          </ul>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Portfolio Metrics</h3>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Target Volatility</span>
              <span className="text-[#E6C46A] font-semibold">Low</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Minimum Ticket</span>
              <span className="text-[#E6C46A] font-semibold">$250K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Allocation Horizon</span>
              <span className="text-[#E6C46A] font-semibold">90-180 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Reporting</span>
              <span className="text-[#E6C46A] font-semibold">Monthly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
