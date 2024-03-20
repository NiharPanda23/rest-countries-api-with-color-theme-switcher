/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito : ["Nunito Sans", "sans-serif"],
        Haviland : ["Mr De Haviland", "cursive"]
      }
    },
  },
  plugins: [],
}

