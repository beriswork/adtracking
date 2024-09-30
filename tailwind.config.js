/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': '#1F2937',
        'nav-border': '#374151',
        'primary': '#3B82F6',
      },
    },
  },
  plugins: [],
}