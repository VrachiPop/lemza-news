/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Literata', 'serif'],
        // Këtu regjistrojmë fontin tënd të ri
        news: ['"Archivo"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
