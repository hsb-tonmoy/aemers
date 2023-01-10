const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				bgColor: 'var(--bgColor)',
				lightColor: 'var(--lightColor)',
				borderColor: 'var(--borderColor)',
				lighterColor: 'var(--lighterColor)'
			},
			fontFamily: {
				primary: ['Red Hat Display', 'sans-serif'],
				secondary: ['Barlow', 'sans-serif']
			},
			gridTemplateColumns: {
				'2fr-1fr': '2fr 1fr'
			},
			animation: {
				'bounce-slow': 'bounce 2s infinite'
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		}),
		require('@tailwindcss/typography'),
		require('flowbite/plugin')
	]
};

module.exports = config;
