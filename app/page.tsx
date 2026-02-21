import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-slate-200">
      <header className="fixed w-full top-0 z-50 bg-dark-bg/70 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold gradient-gold bg-clip-text text-transparent">GOLDUN</Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-gold transition">Features</a>
            <a href="#about" className="text-slate-300 hover:text-gold transition">About</a>
            <a href="#contact" className="px-4 py-2 bg-gold text-dark-bg rounded-md font-semibold">Contact</a>
          </nav>
        </div>
      </header>

      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="gradient-gold bg-clip-text text-transparent">Digital Gold</span>
            <span className="block text-slate-200">with Real Yield</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">Institutional-grade arbitrage and tokenized precious asset infrastructure built for capital efficiency.</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-6 py-3 bg-gold text-dark-bg rounded-md font-semibold shadow">Request Briefing</a>
            <a href="#features" className="px-6 py-3 border-2 border-gold text-gold rounded-md font-semibold">Learn More</a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center gradient-gold bg-clip-text text-transparent">Why Goldun</h2>
          <p className="text-center text-slate-300 mt-4 max-w-3xl mx-auto">We combine execution, custody, and tokenization to capture repeatable cross-market spreads while prioritizing capital preservation.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="text-gold mb-4">🔁</div>
              <h3 className="font-semibold text-slate-100">Arbitrage Engine</h3>
              <p className="mt-2 text-slate-300 text-sm">Automated cross-market execution designed for low latency and high reliability.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="text-gold mb-4">🔒</div>
              <h3 className="font-semibold text-slate-100">Custody & Compliance</h3>
              <p className="mt-2 text-slate-300 text-sm">Institutional custody solutions, transparent reporting, and compliance-first operations.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="text-gold mb-4">⚖️</div>
              <h3 className="font-semibold text-slate-100">Tokenized Assets</h3>
              <p className="mt-2 text-slate-300 text-sm">Immutable, auditable tokens representing allocated physical metal positions.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-100">Built for Institutions</h2>
          <p className="mt-4 text-slate-300">We partner with banks, brokers and accredited investors to deploy capital where structural inefficiencies exist.</p>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-slate-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-slate-100">Get in touch</h3>
          <p className="text-slate-300 mt-2">Interested in a briefing or partnership? Email us for the investor packet.</p>
          <a href="mailto:info@goldun.com" className="inline-block mt-6 px-6 py-3 bg-gold text-dark-bg rounded-md font-semibold">Email Us</a>
        </div>
      </section>

      <footer className="border-t border-slate-800 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© 2026 Goldun. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
