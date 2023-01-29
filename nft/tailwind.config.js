/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fcd535',
        textColor: '#1e2329',
        bgDarkMode: '#181a20',
        textDarkMode: '#eaecef',
      },
    },
  },
  plugins: [],
};
