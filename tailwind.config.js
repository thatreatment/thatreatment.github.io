/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'dark-gold': '#AA8C2C',
        'dark-bg': '#0F172A',
        'dark-card': '#1E293B',
      },
    },
  },
  plugins: [],
}
