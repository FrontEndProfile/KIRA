/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {

      },
      colors: {
        "blue-1000": "#9A9CFF",
        "gray-1000": '#282828',
        "black-1000": '#1B1B1B',
        "black-1100": '#121212',
        "gray-1100": '#D0D0D0',
        "black-1200": '#2A2A2A',
        "gray-1200": '#B8B8B8',
        'gray-1300': '#414141',
        'gray-1400': '#A0A0A0',
        'gray-1500': '#383838',
        'black-1300': '#151515',
        'black-1400': '#1A1A1A',
        'black-1500': '#1E1E1E',
      },
      fontFamily: {
        'mono-sans': "mona-sansbold_wide",
        'panchangmedium': "panchangmedium",
        'panchangsemibold': "panchangsemibold",
        'panchangbold': "panchangbold",
        'hubot-sansregular': 'hubot-sansregular',
        "hubot-sanssemibold": 'hubot-sanssemibold',
        "hubot-sansbold": 'hubot-sansbold',
        "neue_haas": 'neue_haas_grotesk_display65Md',
      },
      screens: {
        'xxs': '320px',
        // => @media (min-width: 320px) { ... }

        'xs': '390px',
        // => @media (min-width: 390px) { ... }

        'sm': '576px',
        // => @media (min-width: 575px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 992px) { ... } 

        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1366px',
        // => @media (min-width: 1440px) { ... }
        '4xl': '1400px',
        // => @media (min-width: 1440px) { ... }
        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}