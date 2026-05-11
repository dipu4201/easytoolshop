/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        dark: '#0F172A',
        navy: '#111827',
      },
    },
  },
  plugins: [],
}
