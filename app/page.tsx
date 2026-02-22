import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen text-slate-200">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/file_0000000003e471fda26895c832f3115f.svg" alt="Goldun logo" className="h-10 w-10" />
            <span className="text-lg font-semibold gradient-gold bg-clip-text text-transparent">Goldun</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#why" className="text-slate-300 hover:text-gold transition">Why</a>
            <a href="#products" className="text-slate-300 hover:text-gold transition">Products</a>
            <a href="#contact" className="px-3 py-2 bg-gold text-dark-bg rounded-md font-semibold">Contact</a>
          </nav>
        </div>
      </header>

      <section className="pt-28 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="block gradient-gold bg-clip-text text-transparent">Digital Gold Infrastructure</span>
            <span className="block text-slate-200 mt-2 text-xl">Institutional execution, custody and tokenization.</span>
          </h1>

          <p className="mt-6 text-md text-slate-300 max-w-2xl mx-auto">We architect capital-efficient, auditable tokenized products backed by allocated precious metals and executed with institutional reliability.</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-6 py-3 bg-gold text-dark-bg rounded-md font-semibold shadow">Request Briefing</a>
            <a href="#why" className="px-6 py-3 border-2 border-gold text-gold rounded-md font-semibold">Explore Why</a>
          </div>
        </div>
      </section>

      <section id="why" className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-800">
            <h3 className="font-semibold text-lg text-slate-100">Execution</h3>
            <p className="mt-3 text-sm text-slate-300">Low-latency engine that captures cross-market spreads while managing counterparty risk.</p>
          </div>

          <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-800">
            <h3 className="font-semibold text-lg text-slate-100">Custody</h3>
            <p className="mt-3 text-sm text-slate-300">Institutional custody solutions with transparent auditing and insured storage.</p>
          </div>

          <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-800">
            <h3 className="font-semibold text-lg text-slate-100">Tokenization</h3>
            <p className="mt-3 text-sm text-slate-300">On-chain representation of allocated physical metal with verifiable proof-of-ownership.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-slate-100">Get in touch</h3>
          <p className="text-slate-300 mt-2">For investor briefings and partnership enquiries, email us.</p>
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
