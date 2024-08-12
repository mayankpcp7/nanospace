/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "/assets/images/webp/hero-background.webp",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
      fontSize: {
        "2xl": "66px",
        xl: "45px",
      },
    },
  },
  plugins: [],
};
