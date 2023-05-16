/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

