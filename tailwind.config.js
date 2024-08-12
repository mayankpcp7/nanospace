/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "./assets/images/webp/hero-bg.webp",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
      fontSize: {
        "3xl": "66px",
        "2xl": "45px",
        "custom-lg": "35px",
        "custom-md": "30px",
        "custom-sm": "20px",
      },
      colors: {
        gray: "#CCCCCC",
        "light-gray": "#3e3f40",
        "off-gray": "#dedede",
      },
      lineHeight: {
        120: "120%",
        150: "150%",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
