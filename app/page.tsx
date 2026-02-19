'use client'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />

      {/* Features / Opportunity */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-gold bg-clip-text text-transparent">
            The Opportunity
          </h2>
          <p className="text-xl text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Global gold markets exceed <span className="text-gold font-semibold">$13&nbsp;trillion</span> in capitalization, yet pricing inefficiencies persist across:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Physical spot markets',
              'Tokenized gold assets',
              'Futures markets',
              'Regional exchanges',
              'DeFi liquidity pools'
            ].map((item, i) => (
              <FeatureCard key={i} title={item} />
            ))}
          </div>

          <p className="text-center text-slate-300 mt-12 text-lg">
            Goldun captures these spreads through an <span className="text-gold font-semibold">Arbitrage Share Pool™</span> designed for capital efficiency and risk-managed returns.
          </p>
        </div>
      </section>

      {/* About / What We Do */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 section-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-gold bg-clip-text text-transparent">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Institutional Arbitrage Engine',
                desc: 'Automated cross-market execution capturing repeatable price discrepancies.'
              },
              {
                title: 'Tokenized Precious Asset Infrastructure',
                desc: 'Digitally represented, custody-backed gold and mineral positions.'
              },
              {
                title: 'Arbitrage Share Pool™',
                desc: 'A regulated investment structure that distributes performance-driven yield while compounding retained capital for scale.'
              }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-gold rounded opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
                <div className="relative bg-slate-900 border border-slate-700 rounded-lg p-8 h-full">
                  <h3 className="text-xl font-bold text-slate-100 mb-4">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 section-divider">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-gold bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            For partnership inquiries, investor briefings, or general questions.
          </p>
          <a href="mailto:info@goldun.com" className="px-8 py-4 bg-gold text-dark-bg rounded-lg font-bold hover:shadow-lg hover:shadow-gold/50 transition-all">
            Email Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
