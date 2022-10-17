/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3E7380',
        secondary: '#F17E60',
        grey: {
          1: '#E8E8E8',
          2: '#A5A5A5',
          3: '#5F6266',
        },
      },
    },
  },
  plugins: [],
}
