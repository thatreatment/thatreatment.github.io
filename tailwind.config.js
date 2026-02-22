/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "goldun-gold": "#E6C46A",
        "goldun-dark": "#0B0F14",
        "goldun-slate": "#1F2933",
      },
      boxShadow: {
        glow: "0 0 45px rgba(230,196,106,0.25)",
      },
      backgroundImage: {
        "hero-aurora": "radial-gradient(800px 400px at 10% 10%, rgba(230,196,106,0.12), transparent 70%), radial-gradient(900px 500px at 90% 20%, rgba(230,196,106,0.08), transparent 70%)",
      },
    },
  },
  plugins: [],
};
