/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Calistoga",
        secondary: 'Archivo',
        nunito : 'nunito'
      },
    },
  },
  plugins: [],
}

