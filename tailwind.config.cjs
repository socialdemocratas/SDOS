const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
      colors: {
          primary: '#e62154',//'#fe2c55', //#ed1b34',
          secondary: '#12e4cb',
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          gray: colors.gray,
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.yellow,
      },
      fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Source Serif Pro', 'serif'],
      },
    extend: {},
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Source Serif Pro', 'serif'],
    }
  },
  plugins: [
		require('@tailwindcss/typography'),
	],
}
