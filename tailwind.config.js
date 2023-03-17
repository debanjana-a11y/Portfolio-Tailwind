/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      cursive: ['cursive']
    },
    animation: {
      'spin': "spin 3s linear infinite"
    },
    extend: {
      backgroundImage: {
        'bgImage': "url('/src/Images/bg.jpg')"
      }
    }
  },
  plugins: [],
}
