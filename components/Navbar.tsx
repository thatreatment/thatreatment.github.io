"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 border-b border-[#E6C46A]/15 bg-[#0B0F14]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-full overflow-hidden border border-[#E6C46A]/35 shadow-[0_8px_24px_rgba(0,0,0,0.35)] bg-[#0F172A]">
            <Image
              src="/file_0000000003e471fda26895c832f3115d.svg"
              alt="Goldun logo"
              width={44}
              height={44}
              className="h-full w-full object-contain p-1"
              priority
            />
          </div>
          <div>
            <span className="block text-[#E6C46A] text-xs font-semibold tracking-[0.35em]">GOLDUN</span>
            <span className="block text-[10px] tracking-[0.22em] text-gray-500 group-hover:text-gray-400 transition-colors">
              INSTITUTIONAL INFRASTRUCTURE
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300 items-center">
          <Link href="#engine" className="hover:text-[#E6C46A] transition-colors">Engine</Link>
          <Link href="#capital" className="hover:text-[#E6C46A] transition-colors">Capital</Link>
          <Link href="/login" className="hover:text-[#E6C46A] transition-colors">Investor Login</Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded-full bg-[#E6C46A] text-[#0B0F14] font-semibold hover:brightness-95 transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
