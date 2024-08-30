/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        richblack: {
          5: '#050505',
          50: '#0d1117',
          100: '#0a0e13',
          200: '#070a0f',
          300: '#05080c',
          400: '#030609',
          500: '#020406',
          600: '#010204',
          700: '#010102',
          800: '#000000',
          900: '#000000',
          
          50: '#0A0B0D',
          100: '#08090B',
          200: '#060708',
          300: '#040506',
          400: '#030405',
          500: '#020304',
          600: '#010202',
          700: '#010101',
          800: '#000000',
          900: '#000000',
        },
      }
    },
  },
  plugins: [],
}

