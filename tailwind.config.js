/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:{
          primaryBlack:"#0C0C0C",
          primaryBrown:"#481E14",
          secondaryBrown:"#9B3922",
          secondaryOrange:"#F2613F"
        }
      }
    },
  },
  plugins: [],
}

