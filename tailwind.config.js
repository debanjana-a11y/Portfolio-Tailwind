/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		fontFamily: {
			cursive: ['cursive'],
		},
		animation: {
			spin: 'spin 3s linear infinite',
		},
		extend: {
			backgroundImage: {
				bgImage: "url('./assets/bg.jpg')",
				bgImageProject: "url('./assets/bg-project.jpg')",
				bgImageSkills: "url('./assets/bg-skills.jpg')",
				bgImageContact: "url('./assets/bg-contact.jpg')",
			},
		},
	},
	plugins: [],
};
