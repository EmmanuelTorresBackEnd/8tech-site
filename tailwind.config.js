/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#A855F7',
          600: '#9333EA',
          400: '#C084FC',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        }
      },
    },
  },
  plugins: [],
}