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
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'wave-hand': 'wave 1.5s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
}
