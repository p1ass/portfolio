module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    colors: {
      blue: {
        DEFAULT: '#4172B5'
      }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
