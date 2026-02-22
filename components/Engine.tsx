import Image from "next/image";

export default function Engine() {
  return (
    <section id="engine" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400">Execution Engine</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Arbitrage, hedging, and settlement at institutional scale.
          </h2>
        </div>
        <p className="text-gray-400 max-w-xl">
          Goldun deploys a multi-venue routing system that prioritizes price certainty,
          capital protection, and compliance from execution to settlement.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          {
            title: "Signal Orchestration",
            copy: "Real-time signals across spot, futures, and tokenized markets with a single risk model.",
          },
          {
            title: "Execution Control",
            copy: "Deterministic workflows with pre-trade checks, post-trade reconciliation, and audit trails.",
          },
          {
            title: "Risk & Compliance",
            copy: "Dynamic position limits, counterparty monitoring, and reporting aligned to institutional mandates.",
          },
        ].map((item) => (
          <div key={item.title} className="p-6 rounded-2xl bg-[#1F2933]">
            <h3 className="text-lg font-semibold text-[#E6C46A]">{item.title}</h3>
            <p className="text-gray-400 mt-3 text-sm">{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {["Execution Desk", "Reserve Monitoring", "Institutional Reporting"].map((label) => (
          <div key={label} className="glass-panel rounded-2xl p-3 border border-[#E6C46A]/10">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/file_0000000003e471fda26895c832f3115d.png"
                alt={label}
                width={1536}
                height={1024}
                className="w-full h-40 object-cover"
              />
            </div>
            <p className="text-xs tracking-[0.25em] text-gray-400 mt-3 px-1 uppercase">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
