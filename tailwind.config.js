/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primaryGreen': '#05A105',
        'secondaryGreen': '#073630',
        'customGreen': '#1D4B45',
        'fadedWhite': '#FFFFFFE5',
        'customCream': '#F9F8F5',
        'customGray': '#F4F2F0',
        'darkGray': '#475467',
        'darkBlue': '#1D3157',
      },
      screens: {
        '4xl': '1600px',
      },
      fontSize: {
        '2xs': '8px',
      },
    },
  },
  plugins: [],
}