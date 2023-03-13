/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      margin:{
        'Margin-Auto': '0 auto'
      }
    },
    screens: {
      

      'sm': '640px',
     
      'md': '768px',
    
      'lg': '1120px',
     
      'xl': '1280px',

      'xxl': '1320px',
    
      '2xl':'1536px',

    },
  },
  plugins: [],
}
