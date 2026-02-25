export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        navy: { 950: "#070D1C", 900: "#080E1D", 800: "#0D1526", 700: "#111f3a" },
        blue: { 600: "#2563EB", 500: "#3B82F6", 400: "#60a5fa" },
        slate: { 50: "#F8FAFC", 100: "#F1F5F9", 200: "#E2E8F0" },
      },
    },
  },
  plugins: [],
};
