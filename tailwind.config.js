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
        "custom-black": "#111111",
        gray: "#CCCCCC",
        "light-gray": "#3e3f40",
        "off-gray": "#dedede",
        "sky-blue": "#5893FF",
        overlay: "rgba(33, 37, 41, 0.6)",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            "text-shadow": "0.5px 0.5px 2px 0px #00000040",
          },
        },
      );
    },
  ],
};
