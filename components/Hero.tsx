export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent -z-10"></div>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-gold bg-clip-text text-transparent">Digital Gold</span>
          <br />
          <span>Real Yield.</span>
          <br />
          <span className="text-gold">Institutional Arbitrage.</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          Goldun is a next-generation digital commodities infrastructure platform
          built to capture inefficiencies across physical gold, tokenized assets,
          and global derivatives markets.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-gold text-dark-bg rounded-lg font-bold hover:shadow-lg hover:shadow-gold/50 transition-all"
          >
            Request Briefing
          </a>
          <a
            href="#features"
            className="px-8 py-4 border-2 border-gold text-gold rounded-lg font-bold hover:bg-gold/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
