/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        archivo: ['"Archivo Black"', 'sans-serif'],
      },
      colors: {
        black1: 'rgb(23, 23, 23)',
        yellow1: 'rgb(243,211,13)',
      },
    },
  },
  plugins: [],
}

