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
        myBlue: '#3F72AF',
        myDarkBlue: '#112D4E'
      }
    },
  },
  plugins: [],
}