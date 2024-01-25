/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#e0f3ed',
				second: 'blue',
			},
		},
	},
	daisyui: {
		themes: ['light'],
	},
	plugins: [require('daisyui')],
}
