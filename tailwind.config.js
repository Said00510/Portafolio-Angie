/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index-html',
           './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '280px',   
        'xsm': '360px',   
      },
    },
  },
  plugins: [],
}



