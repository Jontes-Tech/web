/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"background": "#2c2c2c",
				"dockbg": "#3f3f3e",
				"dockhover": "#555554"
			}
		},
	},
	plugins: [
		require('flowbite-typography'),
	  ],
}
