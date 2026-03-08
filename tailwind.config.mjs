/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                // Ensure 'Literata' is the default sans (or serif, depending on your design choice)
                sans: ['"Literata"', 'serif'],
                // 'news' class now explicitly targets Archivo
                news: ['"Archivo"', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}