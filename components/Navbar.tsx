"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed w-full z-50 border-b border-[#E6C46A]/15 bg-[#0B0F14]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div>
            <span className="block text-[#E6C46A] text-sm font-semibold tracking-[0.35em]">GOLDUN</span>
            <span className="block text-[10px] tracking-[0.22em] text-gray-500 group-hover:text-gray-400 transition-colors">
              INSTITUTIONAL INFRASTRUCTURE
            </span>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-[#E6C46A]/30 px-3 py-2 text-[#E6C46A]"
        >
          <span className="text-sm font-semibold">Menu</span>
        </button>

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

        {isOpen && (
          <nav className="md:hidden mt-4 pb-2 border-t border-white/10 pt-4 flex flex-col gap-3 text-sm text-gray-200">
            <Link href="#engine" onClick={closeMenu} className="hover:text-[#E6C46A] transition-colors">Engine</Link>
            <Link href="#capital" onClick={closeMenu} className="hover:text-[#E6C46A] transition-colors">Capital</Link>
            <Link href="/login" onClick={closeMenu} className="hover:text-[#E6C46A] transition-colors">Investor Login</Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className="inline-flex w-fit px-4 py-2 rounded-full bg-[#E6C46A] text-[#0B0F14] font-semibold"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
