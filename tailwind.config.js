const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './public/index.html',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#09223b"
      },
      fontFamily: {
        'strawford': ['Strawford', 'sans-serif'],
        'formula': ["Formula Condensed", 'sans-serif']
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

