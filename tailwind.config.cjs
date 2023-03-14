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
    extend: {
      colors:{
        'bgd-Header': '#DCF1FA'
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
}

