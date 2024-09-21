/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Founder: ['FoundersGroteskCondensed-Bold', 'sans-serif'],
        CardinalR: ['cardinalfruitweb-regular', 'sans-serif'],
        Cardinali: ['cardinalfruitweb-italic', 'sans-serif'],
      },
      colors: {
        aquamarine: '#7FFFD4', // Use a comma here, not a semicolon
      }
    },
  },
  plugins: [],
}
