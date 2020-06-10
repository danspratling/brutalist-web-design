const production = !process.env.ROLLUP_WATCH

module.exports = {
  purge: {
    enabled: production,
    content: ['./src/**/*.svelte'],
  },
  theme: {
    fontFamily: {
      sans: ['Chivo', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    },
    boxShadow: {
      single: '10px 10px #000000',
      double: '3px 3px #000000, 10px 10px #faf089, 20px 20px #000000',
    },
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
