/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "serif"],
        nunito: ["Nunito", "serif"],
      },
      backgroundImage:{
        subbg: "url('./assets/subbg.png')",
      }
    },
  },
  plugins: [],
}

