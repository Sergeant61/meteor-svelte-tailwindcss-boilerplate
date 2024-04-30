const defaultTheme = require('tailwindcss/defaultTheme')

if (!Object.hasOwnProperty('hasOwn')) {
  Object.defineProperty(Object, 'hasOwn', {
    value: (obj, key) => {
      try {
        return typeof obj === 'object' && obj !== null && Object.keys(obj).length > 0 && obj.hasOwnProperty(key)
      } catch (error) {
        if (obj !== null) {
          console.log(obj, error)
        }
      }
    },
    writable: true,
    configurable: true,
  })
}

module.exports = {
  content: ['./imports/app/**/*.{js,jsx,ts,tsx,svelte,html}', './client/*.html'],
  darkMode: 'class',
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },


  daisyui: {
    themes: [      {
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        primary: "#7C3AED",
      },
    }, 'dracula'],
  },
}
