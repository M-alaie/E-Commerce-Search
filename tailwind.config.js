/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gray-150':'#ccc',
        'star':'#d5ab55'
      },
      gridTemplateColumns:{
        'layout':'15% 85%'
      },
      width:{
        'radio':'20px'
      },
      height:{
        'radio':'20px'
      }

   
    },
  },
  plugins: [],
}