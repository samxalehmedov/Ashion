/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141517",
        primary200: "#0b1c39",
        primary300: "#444444",
        secondary: "#ff003c",
        textGray: "#777",
        footerText: "#868c98",
        copyRightText: "#888888",
        cardBorder:"#2577fd"
      },
      backgroundColor: {
        heroBg: "#f0f0f2",
        buttonBg: "#4a4a4b",
        cardButton:"#2577fd"
      },
      backgroundImage:{
        'productHeroBg': "url('../src/assets/ProductDetails/about_hero.png')",
      }
    },
  },
  plugins: [],
};
