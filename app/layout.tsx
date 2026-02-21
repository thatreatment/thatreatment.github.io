import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goldun.com - Digital Gold Infrastructure',
  description: 'Institutional-grade digital gold arbitrage platform backed by real precious metals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-slate-200 pt-16">
        {children}
      </body>
    </html>
  )
}
