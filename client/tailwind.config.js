/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jx,tsx,jsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
  theme: {
    extend: {},
  },
  plugins: [
    async () => (await import('flowbite/plugin')).default
  ],
} 
