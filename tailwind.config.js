/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: "#fbc4d8",
          green: "#b9fbc0",
          yellow: "#fff4b7",
          cream: "#fffaf0",
        },
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "cursive"],
      },
    },
  },
  plugins: [],
};
