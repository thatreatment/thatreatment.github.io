import Ticker from './Ticker';

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/file_0000000003e471fda26895c832f3115d.svg" alt="Goldun logo" className="h-12 w-12 object-contain" />
          <div>
            <div className="text-xl font-bold gradient-gold bg-clip-text text-transparent">GOLDUN</div>
            <div className="text-sm text-slate-400">Digital Gold Infrastructure</div>
          </div>
        </div>
        <div className="hidden md:block">
          <Ticker />
        </div>
      </div>
    </header>
  );
}
