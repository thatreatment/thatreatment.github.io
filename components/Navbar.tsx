import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark-bg bg-opacity-95 backdrop-blur border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold gradient-gold bg-clip-text text-transparent">GOLDUN</a>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="#features">
            <a className="text-slate-200 hover:text-gold transition-colors">Features</a>
          </Link>
          <Link href="#about">
            <a className="text-slate-200 hover:text-gold transition-colors">About</a>
          </Link>
          <Link href="#contact">
            <a className="px-4 py-2 bg-gold text-dark-bg rounded font-medium hover:opacity-90 transition-opacity">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
