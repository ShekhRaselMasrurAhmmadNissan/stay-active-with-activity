/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#f7807e',

					secondary: '#f4a6de',

					accent: '#ddc749',

					neutral: '#212D36',

					'base-100': '#252955',

					info: '#7BD8EF',

					success: '#5EE4AE',

					warning: '#92730C',

					error: '#EB7085',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
