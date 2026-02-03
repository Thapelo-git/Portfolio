/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        signature: ["Pacifico", "cursive"],
      },
      colors: {
        soft: "#d5dbe1",
        dark: "#0b0b0b",
        accent: "#ff4d2d",
      },
    },
  },
  plugins: [],
};
