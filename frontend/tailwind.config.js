/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Nunito : ["Nunito Sans", "sans-serif"]
      },
      colors: {
        Dark_100: ["#2b3945"],
        Dark_200: ["#202c37"],
        Dark_300: ["#111517"],
        Light_100: ["#fafafa"],
        Light_200: ["#ffffff"],
        Light_300: ["#858585"]
      }
    },
  },
  plugins: [],
}

