const { mauve, violet, red, blackA } = require("@radix-ui/colors");
const blue = { blue1: "#0f172a", blue2: " #0d1425", blue3: "#233662", blue4: "#151D30" }

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        'xl' : '1200px'
      },

      colors: {
        ...mauve,
        ...violet,
        ...red,
        ...blackA,
        ...blue,
      },
      fontFamily: {
        'inter': ["Inter", 'sans-serif']
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("flowbite-typography")],
};
