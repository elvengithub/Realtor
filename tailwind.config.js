/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D4AF37',
        'brand-gold-deep': '#B8860B',
      }
    },
  },
  plugins: [],
}
