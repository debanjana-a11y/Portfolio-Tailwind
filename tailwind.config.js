/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/*.{html,js}'],
	theme: {
		fontFamily: {
			cursive: ['cursive'],
		},
		animation: {
			spin: 'spin 3s linear infinite',
		},
		extend: {
			backgroundImage: {
				bgImage: "url('/dist/assets/bg.jpg')",
				bgImageProject: "url('/dist/assets/bg-project.jpg')",
				bgImageSkills: "url('/dist/assets/bg-skills.jpg')",
				bgImageContact: "url('/dist/assets/bg-contact.jpg')",
			},
		},
	},
	plugins: [],
};
