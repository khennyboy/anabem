/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': { 'max': '55em' },
        'android': { 'max': '30em' },
        'smallAndroid': { 'min': '0em', 'max': '22em' },
        'largeTablet': { 'min': '55em', 'max': '75em' },
        'mediumDesktop': { 'min': '75.1em', 'max': '94em' }
      },
      animation: {
        rotate: 'rotate 1.5s infinite linear',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
};
