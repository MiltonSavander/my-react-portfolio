/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myLightBlue: '#F9F7F7',
        myDarkLightBlue: '#DBE2EF',
        myHover: '#1e4f88',
        myBlue: '#3F72AF',
        myDarkBlue: '#112D4E'
      }
    },
  },
  plugins: [],
}