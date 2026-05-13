/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brandBg: '#0a0a0a',
        brandCard: '#151515',
        brandAccent: '#f97316'
      }
    }
  },
  plugins: []
};
