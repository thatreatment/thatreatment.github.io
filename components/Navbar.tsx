"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-[#0B0F14]/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/file_0000000003e471fda26895c832f3115d.svg"
            alt="Goldun logo"
            className="h-10 w-10"
          />
          <span className="text-[#E6C46A] text-xs font-semibold tracking-[0.35em]">GOLDUN</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="#engine" className="hover:text-[#E6C46A]">Engine</Link>
          <Link href="#capital" className="hover:text-[#E6C46A]">Capital</Link>
          <Link href="/login" className="hover:text-[#E6C46A]">Investor Login</Link>
          <Link
            href="#contact"
            className="px-3 py-2 rounded-full bg-[#E6C46A] text-[#0B0F14] font-semibold"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
