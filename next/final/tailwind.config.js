/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,html,js}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,html,js}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [  require('flowbite/plugin')],
}
