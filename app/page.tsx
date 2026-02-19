'use client'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-bg bg-opacity-95 backdrop-blur border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-gold bg-clip-text text-transparent">
            GOLDUN
          </div>
          <button className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-dark-bg transition-colors text-sm font-medium rounded">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-gold bg-clip-text text-transparent">Digital Gold (edited).</span>
            <br />
            <span>Real Yield.</span>
            <br />
            <span className="text-gold">Institutional Arbitrage.</span>
            {/* headline was updated for demonstration purposes */}
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Goldun is a next-generation digital commodities infrastructure platform built to capture inefficiencies across physical gold, tokenized assets, and global derivatives markets.
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 mb-12 max-w-2xl mx-auto">
            <p className="text-lg italic text-slate-100">
              "We combine institutional-grade trading systems with blockchain settlement architecture to create a scalable arbitrage engine backed by real precious metals."
            </p>
          </div>

          <div className="space-y-4 text-slate-300">
            <p className="text-lg font-semibold text-gold">This is not speculative crypto.</p>
            <p className="text-lg font-semibold">This is asset-backed yield.</p>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-gold bg-clip-text text-transparent">
            The Opportunity
          </h2>
          
          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Global gold markets exceed <span className="text-gold font-semibold">$13 trillion</span> in capitalization, yet pricing inefficiencies persist across:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Physical spot markets',
              'Tokenized gold assets (PAX Gold, Tether Gold)',
              'Futures markets',
              'Regional exchanges',
              'DeFi liquidity pools'
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-gold/50 transition-colors">
                <p className="text-slate-100 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-300 mt-12 text-lg">
            Goldun captures these spreads systematically through a <span className="text-gold font-semibold">Arbitrage Share Pool™</span> designed for capital efficiency and risk-managed returns.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-gold bg-clip-text text-transparent">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '1',
                title: 'Institutional Arbitrage Engine',
                desc: 'Automated cross-market execution capturing repeatable price discrepancies.'
              },
              {
                num: '2',
                title: 'Tokenized Precious Asset Infrastructure',
                desc: 'Digitally represented, custody-backed gold and mineral positions.'
              },
              {
                num: '3',
                title: 'Arbitrage Share Pool™',
                desc: 'A regulated investment structure that distributes performance-driven yield while compounding retained capital for scale.'
              }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-gold rounded opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                <div className="relative bg-slate-900 border border-slate-700 rounded-lg p-8 h-full">
                  <div className="text-5xl font-bold text-gold mb-4 opacity-20">{item.num}</div>
                  <h3 className="text-xl font-bold text-slate-100 mb-4">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Goldun Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-gold bg-clip-text text-transparent">
            Why Goldun
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Asset-backed strategy',
              'Auditable reserves',
              'Regulated custody partners',
              'Blockchain-based transparency',
              'Performance-driven model',
              'Designed for institutional capital'
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-2 h-12 bg-gradient-to-b from-gold to-transparent rounded"></div>
                <p className="text-lg text-slate-100 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-300 mt-12 text-lg italic">
            We are building the financial infrastructure layer for tokenized hard assets.
          </p>
        </div>
      </section>

      {/* Capital Strategy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-divider">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-gold bg-clip-text text-transparent">
            Capital Strategy
          </h2>

          <p className="text-center text-slate-300 mb-12 text-lg">
            Goldun is structured to scale from initial institutional deployment toward <span className="text-gold font-semibold">multi-billion-dollar asset management capacity.</span>
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-8">
            <div className="mb-8">
              <p className="text-gold font-bold text-lg mb-2">Target Raise</p>
              <p className="text-4xl font-bold text-slate-100">$700M</p>
            </div>

            <p className="text-gold font-bold text-lg mb-6">Use of Capital:</p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Arbitrage expansion</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Mineral acquisition contracts</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Infrastructure buildout</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Regulatory licensing</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">•</span>
                <span>Global vault partnerships</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 section-divider">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-gold bg-clip-text text-transparent">
            Vision
          </h2>
          <p className="text-2xl text-slate-100 leading-relaxed">
            To become the primary liquidity and settlement layer for tokenized gold and precious mineral markets worldwide.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-divider">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">
            For Institutional Investors
          </h2>
          <p className="text-xl text-slate-300 mb-2">Venture Capital Partners</p>
          <p className="text-xl text-slate-300 mb-12">Strategic Sovereign Capital</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gradient-gold text-dark-bg px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
              Request Private Investor Briefing
            </button>
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/10 transition-colors">
              Secure Access Portal
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-gold font-bold text-lg mb-4">GOLDUN</h3>
              <p className="text-slate-400">Digital Gold Infrastructure</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Institutional-grade arbitrage platform backed by real precious metals.</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">© 2026 Goldun.com<br />All rights reserved.</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
            <p>This is a private placement opportunity for accredited investors only.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
