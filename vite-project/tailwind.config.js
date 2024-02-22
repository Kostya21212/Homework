/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/vite-project/index.html','/vite-project/main.js.{js}'],
  theme: {
    extend: {},
  },
  plugins: [require("rippleui")],
}

