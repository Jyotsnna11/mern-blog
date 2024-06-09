/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
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
