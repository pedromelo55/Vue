/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./node_modules/flowbite.{js,ts}"
    ],
    theme: {
      extend: {
        colors: {
          goias: {
            "50" : "#12b488",
            "100" : "#0c8b6a",
            "150" : "#096950"
          }
        },
        fontFamily: {
          prompt: ['Prompt'],
          lato: ['Lato'],
          playfairDisplay: ['Playfair Display'],
          rubikPuddles: ['Rubik Puddles'],
          inter: ['Inter'],
        },
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
  