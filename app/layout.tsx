import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Goldun.com | Digital Gold Arbitrage Infrastructure",
  description:
    "Institutional infrastructure for tokenized gold and precious mineral arbitrage.",
  keywords:
    "gold arbitrage, tokenized gold, institutional crypto infrastructure",
  openGraph: {
    title: "Goldun.com | Digital Gold Arbitrage Infrastructure",
    description:
      "Institutional infrastructure for tokenized gold and precious mineral arbitrage.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldun.com | Digital Gold Arbitrage Infrastructure",
    description:
      "Institutional infrastructure for tokenized gold and precious mineral arbitrage.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${space.variable}`}>
      <body className="bg-[#0B0F14] text-white">{children}</body>
    </html>
  );
}
