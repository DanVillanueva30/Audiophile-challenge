/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#d87d4a",
        'light-primary': "#fbaf85",
        'light-gray': "#f1f1f1",
        'very-light-gray': "#fafafa",
        'dark-variant': "#101010"
      },
      fontFamily: {
        'manrope': ["Manrope", "sans-serif"] //from 200 to 800
      }
    },
  },
  plugins: [],
}

