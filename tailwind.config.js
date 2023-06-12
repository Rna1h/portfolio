/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {
      spacing: {
        "big": "48rem",
        "biggest": "56rem"

      }
    },
    screens: {
      sm: "480px",
      md: "760px",
      lg: "1024px",
      xl: "1280px",
      '2xl': '1536px'

    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

