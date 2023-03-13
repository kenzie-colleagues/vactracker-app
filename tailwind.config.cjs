/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    maxHeight: {
      '500': '500px',
      '600': '600px',
      '700': '700px',
      '800': '800px',
      '900': '900px',
    },
  },
  plugins: [],
}
