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
        'bgImage': "url('/src/Images/bg.jpg')",
        'bgImageProject': "url('/src/Images/bg-project.jpg')",
        'bgImageSkills': "url('/src/Images/bg-skills.jpg')"
      }
    }
  },
  plugins: [],
}
