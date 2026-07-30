/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5F0E8',
          300: '#EDE6D9',
          400: '#E0D5C5',
        },
        sand: {
          100: '#D4C4B0',
          200: '#C4B098',
          300: '#B09A80',
        },
        terra: {
          300: '#C4916C',
          400: '#B07D58',
          500: '#9C6B48',
          600: '#8A5E3F',
        },
        charcoal: {
          800: '#1A1A1A',
          700: '#2D2D2D',
          600: '#3D3D3D',
          500: '#5C5C5C',
          400: '#7A7A7A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
      },
    },
  },
  plugins: [],
}
